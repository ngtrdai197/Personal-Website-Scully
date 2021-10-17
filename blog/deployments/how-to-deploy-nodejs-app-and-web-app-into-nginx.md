---
title: How to deploy Nodejs app and Web app into Nginx
description: 'How to deploy Nodejs app and Web app into Nginx'
published: true
slugs: 'how-to-deploy-nodejs-app-and-web-app-into-nginx'
publishedAt: 2021-10-18
tags: ['Nginx', 'Nodejs', 'Web app']
---

# How to deploy Nodejs app and Web app into Nginx

## Step 1 - Installing Nginx
Because Nginx is available in Ubuntu’s default repositories, it is possible to install it from these repositories using the apt packaging system.

Since this is our first interaction with the apt packaging system in this session, we will update our local package index so that we have access to the most recent package listings. Afterwards, we can install nginx:

```bash
$ sudo apt update

$ sudo apt install nginx
```

After accepting the procedure, apt will install Nginx and any required dependencies to your server.

## Step 2 - Adjusting the Firewall
Before testing Nginx, the firewall software needs to be adjusted to allow access to the service. Nginx registers itself as a service with ufw upon installation, making it straightforward to allow Nginx access.

List the application configurations that ufw knows how to work with by typing:
```bash
$ sudo ufw app list
```

You should get a listing of the application profiles:
```bash
Output
Available applications:
  Nginx Full
  Nginx HTTP
  Nginx HTTPS
  OpenSSH
```
It is recommended that you enable the most restrictive profile that will still allow the traffic you’ve configured. Right now, we will only need to allow traffic on port 80.

You can enable this by typing:
```bash
$ sudo ufw allow 'Nginx HTTP'
```
You can verify the change by typing:

```bash
$ sudo ufw status
```
## Step 3 – Checking your Web Server
At the end of the installation process, Ubuntu 20.04 starts Nginx. The web server should already be up and running.

We can check with the `systemd` init system to make sure the service is running by typing:
```bash
$ systemctl status nginx
```

```bash
Output
● nginx.service - A high performance web server and a reverse proxy server
   Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
   Active: active (running) since Fri 2020-04-20 16:08:19 UTC; 3 days ago
     Docs: man:nginx(8)
 Main PID: 2369 (nginx)
    Tasks: 2 (limit: 1153)
   Memory: 3.5M
   CGroup: /system.slice/nginx.service
           ├─2369 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;
           └─2380 nginx: worker process
```

When you have your server’s IP address, enter it into your browser’s address bar:

```
http://your_server_ip
```

## Step 4 – Managing the Nginx Process
Now that you have your web server up and running, let’s review some basic management commands.

To stop your web server, type:
```
sudo systemctl stop nginx
```
To start the web server when it is stopped, type:
```
sudo systemctl start nginx
```
To stop and then start the service again, type:
```
sudo systemctl restart nginx
```
If you are only making configuration changes, Nginx can often reload without dropping connections. To do this, type:
```
sudo systemctl reload nginx
```
By default, Nginx is configured to start automatically when the server boots. If this is not what you want, you can disable this behavior by typing:
```
sudo systemctl disable nginx
```
To re-enable the service to start up at boot, you can type:
```
sudo systemctl enable nginx
```

## Step 5 – Setting Up Server
When using the Nginx web server, server blocks (similar to virtual hosts in Apache) can be used to encapsulate configuration details and host more than one domain from a single server. We will set up a domain called `your_domain`, but you should replace this with your own domain name.

Nginx on Ubuntu 20.04 has one server block enabled by default that is configured to serve documents out of a directory at `/var/www/html`. While this works well for a single site, it can become unwieldy if you are hosting multiple sites. Instead of modifying `/var/www/html`, let’s create a directory structure within `/var/www` for our `your_domain` site, leaving `/var/www/html` in place as the default directory to be served if a client request doesn’t match any other sites.

Create the directory for `your_domain` as follows, using the -p flag to create any necessary parent directories:
```
sudo mkdir -p /var/www/your_domain/html
```
Next, assign ownership of the directory with the $USER environment variable:
```
sudo chown -R $USER:$USER /var/www/your_domain/html
```
The permissions of your web roots should be correct if you haven’t modified your umask value, which sets default file permissions. To ensure that your permissions are correct and allow the owner to read, write, and execute the files while granting only read and execute permissions to groups and others, you can input the following command:
```
sudo chmod -R 755 /var/www/your_domain
```
Next, create a sample `index.html` page using nano or your favorite editor:
```
nano /var/www/your_domain/html/index.html
```
In order for Nginx to serve this content, it’s necessary to create a server block with the correct directives. Instead of modifying the default configuration file directly, let’s make a new one at `/etc/nginx/sites-available/your_domain`:
```
sudo nano /etc/nginx/sites-available/your_domain
```
Paste in the following configuration block, which is similar to the default, but updated for our new directory and domain name: `/etc/nginx/sites-available/your_domain`
```
server {
        listen 80;
        listen [::]:80;

        root /var/www/ng-todo-app/html;
        index index.html index.htm;
	    server_name _;
        location / { # Web app
		    try_files $uri $uri/ /index.html;
        }
        location /api/ {
		    proxy_pass http://localhost:3333/; # port to mapping backend
            proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
        }
}
```
> With location `/api/` when enter `domain/api/` nginx going to forward to `http://localhost:3333/`
Notice that we’ve updated the root configuration to our new directory, and the `server_name` to our domain name.

Next, let’s enable the file by creating a link from it to the sites-enabled directory, which Nginx reads from during startup:

```
sudo ln -s /etc/nginx/sites-available/your_domain /etc/nginx/sites-enabled/
```

By default, nginx will use the default configuration file in `/etc/nginx/sites-available/deaultef`. So we need to modify it a bit, so that nginx can access the correct configuration file that we want.
```
listen 80 default_server;
listen [::]:80 default_server;
```
Instead of listening on port 80, we will update it to a port we don't use


## Conclusion
Next, test to make sure that there are no syntax errors in any of your Nginx files:
```
sudo nginx -t
```
If there aren’t any problems, restart Nginx to enable your changes:
```
sudo systemctl restart nginx
```

---
The documentation is taken from and has been slightly modified to suit my settings. The article is only for the purpose of saving as a document for personal use and sharing for those who need it:

https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04