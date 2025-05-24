+++
title = "**Exam**"
duration = "2h"
weight = 6
+++
---
## Kubernetes Security Practice Questions with Answers (CKS)

---

### 1. ImagePolicyWebhook

**Objective**: Ensure all images are verified via an external webhook.

**Steps**:

1. Create the configuration file `/etc/kubernetes/confcontrol/webhook-config.yaml`:
```yaml
apiVersion: apiserver.config.k8s.io/v1
kind: AdmissionConfiguration
plugins:
- name: ImagePolicyWebhook
  configuration:
    imagePolicy:
      kubeConfigFile: /etc/kubernetes/confcontrol/image-webhook-config.yaml
      allowTTL: 30
      denyTTL: 30
      retryBackoff: 500
      defaultAllow: false
```

2. Create the webhook kubeconfig at `/etc/kubernetes/confcontrol/image-webhook-config.yaml`:
```yaml
apiVersion: v1
kind: Config
clusters:
- name: image-policy
  cluster:
    server: https://webhook.kplabs.internal
    certificate-authority: /etc/kubernetes/pki/ca.crt
users:
- name: image-policy
  user:
    client-certificate: /etc/kubernetes/pki/apiserver.crt
    client-key: /etc/kubernetes/pki/apiserver.key
contexts:
- name: image-policy
  context:
    cluster: image-policy
    user: image-policy
current-context: image-policy
```

3. Modify `kube-apiserver` manifest to include:
```yaml
--admission-control-config-file=/etc/kubernetes/confcontrol/webhook-config.yaml
--enable-admission-plugins=ImagePolicyWebhook
```

4. Create a pod to verify:
```bash
kubectl run nginx --image=nginx
```

5. If the pod fails, get error log:
```bash
journalctl -u kubelet > /tmp/error.log
```

---

## 2. AppArmor

**Objective**: Load and enforce an AppArmor profile.

**Steps**:
1. Download and load the profile:
```bash
wget https://raw.githubusercontent.com/zealvora/myrepo/master/cks/apparmor-profile -P /etc/apparmor.d
apparmor_parser -r /etc/apparmor.d/apparmor-profile
```

2. Create a deployment using AppArmor:
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: pod-deploy
spec:
  replicas: 2
  selector:
    matchLabels:
      app: busybox
  template:
    metadata:
      labels:
        app: busybox
      annotations:
        container.apparmor.security.beta.kubernetes.io/busybox-container: localhost/apparmor-profile
    spec:
      containers:
      - name: busybox-container
        image: busybox
        command: ["sleep", "36000"]
```

---

## 3. Auditing

**Objective**: Configure audit policy with different log levels.

**Steps**:
1. Create `/etc/kubernetes/audit-policy.yaml`:
```yaml
apiVersion: audit.k8s.io/v1
kind: Policy
rules:
- level: Metadata
  resources:
  - group: ""
    resources: ["pods"]
```

2. Edit `kube-apiserver` manifest:
```yaml
--audit-policy-file=/etc/kubernetes/audit-policy.yaml
--audit-log-path=/var/log/kubernetes/kube-apiserver-audit.log
```

---

## 4. PodSecurityPolicy (PSP) (Note: Deprecated in newer Kubernetes versions)

**Objective**: Create a PSP that denies privilege escalation.

**Steps**:
1. Create the PSP:
```yaml
apiVersion: policy/v1beta1
kind: PodSecurityPolicy
metadata:
  name: restricted
spec:
  privileged: false
  allowPrivilegeEscalation: false
  requiredDropCapabilities:
    - ALL
  volumes:
    - '*'
  runAsUser:
    rule: 'MustRunAsNonRoot'
  seLinux:
    rule: 'RunAsAny'
  fsGroup:
    rule: 'RunAsAny'
  supplementalGroups:
    rule: 'RunAsAny'
```

2. Create ClusterRole and bind it:
```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: psp:restricted
rules:
- apiGroups:
  - policy
  resourceNames:
  - restricted
  resources:
  - podsecuritypolicies
  verbs:
  - use
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: psp:restricted
  namespace: default
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: psp:restricted
subjects:
- kind: User
  name: dev-user
  apiGroup: rbac.authorization.k8s.io
```

---

## 5. Seccomp

**Objective**: Apply a seccomp profile to a pod.

**Steps**:
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: seccomp-demo
  annotations:
    seccomp.security.alpha.kubernetes.io/pod: localhost/my-seccomp-profile.json
spec:
  containers:
  - name: mycontainer
    image: nginx
```

Make sure your profile is placed in `/var/lib/kubelet/seccomp`.

---

## 6. NetworkPolicy

**Objective**: Restrict ingress/egress traffic.

**Example**: Allow only frontend to talk to backend:
```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-frontend
  namespace: default
spec:
  podSelector:
    matchLabels:
      role: backend
  ingress:
  - from:
    - podSelector:
        matchLabels:
          role: frontend
```

---

## 7. RBAC

**Objective**: Create role and bind to user.

**Steps**:
```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: default
  name: pod-reader
rules:
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["get", "watch", "list"]
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: read-pods
  namespace: default
subjects:
- kind: User
  name: jane
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: Role
  name: pod-reader
  apiGroup: rbac.authorization.k8s.io
```

---

## 8. Secrets

**Objective**: Encrypt secrets at rest.

**Steps**:
1. Create encryption config:
```yaml
apiVersion: apiserver.config.k8s.io/v1
kind: EncryptionConfiguration
resources:
- resources:
  - secrets
  providers:
  - aescbc:
      keys:
      - name: key1
        secret: <base64-encoded-secret>
  - identity: {}
```

2. Apply to kube-apiserver:
```yaml
--encryption-provider-config=/etc/kubernetes/encryption-config.yaml
```

---

## 9. ServiceAccount Token Projection

**Objective**: Configure pods to use projected tokens.

**Steps**:
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: mypod
spec:
  serviceAccountName: my-sa
  containers:
  - name: mycontainer
    image: busybox
    volumeMounts:
    - name: token
      mountPath: /var/run/secrets/tokens
      readOnly: true
  volumes:
  - name: token
    projected:
      sources:
      - serviceAccountToken:
          path: mytoken
          expirationSeconds: 3600
          audience: myaudience
```

---

## 10. CIS Benchmark Tools

**Objective**: Scan cluster for security compliance.

**Tools**:
- **kube-bench**: Runs CIS benchmark tests.
  ```bash
  kube-bench node
  ```

- **kube-hunter**: Security audit tool for Kubernetes clusters.
  ```bash
  kube-hunter --remote <CLUSTER-IP>
  ```

---




---
# Question 1: Creating a Single Container Pod
apiVersion: v1
kind: Pod
metadata:
  name: nirlabs-nginx
spec:
  containers:
  - name: mycontainer
    image: mynirlabs/kubernetes:nginx

---
# Question 2: Commands and Arguments
apiVersion: v1
kind: Pod
metadata:
  name: nirlabs-cmdargs
spec:
  containers:
  - name: cmdcontainer
    image: busybox
    command: ["sleep"]
    args: ["3600"]

---
# Question 3: Exposing Ports for Pods
apiVersion: v1
kind: Pod
metadata:
  name: nirlabs-ports
spec:
  containers:
  - name: nginx
    image: nginx
    ports:
    - containerPort: 80

---
# Question 4: Arguments for Logging
apiVersion: v1
kind: Pod
metadata:
  name: nirlabs-logging
spec:
  containers:
  - name: logging-container
    image: nginx
    args:
    - /bin/sh
    - -c
    - >
      i=0;
      while true;
      do
        echo "$i: $(date)" >> /var/log/1.log;
        echo "$(date) INFO $i" >> /var/log/2.log;
        i=$((i+1));
        sleep 1;
      done

---
# Part 2 - Question 1: Labels
apiVersion: v1
kind: Pod
metadata:
  name: nirlabs-label
  labels:
    env: production
    app: webserver
spec:
  containers:
  - name: nginx-container
    image: nginx

---
# Part 2 - Question 2: Deployments
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: nginx
  name: nirlabs-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nirlabs-deployment
        image: nginx

---
# Part 2 - Question 3: Rolling Updates and Rollbacks
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: nginx
  name: nirlabs-updates
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nirlabs-updates
        image: nginx

---
# Part 2 - Question 4: Labels and Selectors
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nirlabs-selector
spec:
  replicas: 1
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nirlabs-updates
        image: nginx
      nodeSelector:
        disktype: ssd

---
# Part 2 - Question 5: CronJob
apiVersion: batch/v1beta1
kind: CronJob
metadata:
  name: nirlabs-job
spec:
  schedule: "*/1 * * * *"
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: hello
            image: busybox
            args:
            - /bin/sh
            - -c
            - date
          restartPolicy: OnFailure

---
# Part 2 - Question 6: CronJob with Timeout
apiVersion: batch/v1beta1
kind: CronJob
metadata:
  name: nirlabs-cron
spec:
  schedule: "*/1 * * * *"
  jobTemplate:
    spec:
      activeDeadlineSeconds: 10
      template:
        spec:
          containers:
          - name: hello
            image: busybox
            command: ["curl", "nirlabs.in/ping"]
          restartPolicy: OnFailure

---
# Part 2 - Question 7: Deployment Configuration
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nirlabs-configuration
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nirlabs-configuration
        image: nginx
  strategy:
    rollingUpdate:
      maxSurge: 30%
      maxUnavailable: 0
