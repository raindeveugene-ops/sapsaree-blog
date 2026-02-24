---
title: 'Setting Up a Home Lab with Raspberry Pi'
description: 'A practical guide to building a home lab using Raspberry Pi for self-hosting services, learning networking, and running personal projects.'
pubDate: 2026-02-18
tags: ['raspberry-pi', 'homelab', 'self-hosting', 'linux']
category: tech
lang: en
heroImage: '../../assets/blog-placeholder-5.jpg'
---

# Setting Up a Home Lab with Raspberry Pi

If you've been thinking about self-hosting services or just want a playground to learn Linux and networking, a Raspberry Pi makes an excellent starting point. In this post, I'll walk through my home lab setup.

## Why a Home Lab?

- **Privacy**: Host your own services instead of relying on third parties
- **Learning**: Hands-on experience with Linux, networking, Docker, and more
- **Cost**: A Raspberry Pi costs a fraction of cloud hosting over time
- **Fun**: There's something satisfying about running your own infrastructure

## Hardware

For this setup, I'm using:

- Raspberry Pi 5 (8GB RAM)
- 256GB microSD card
- Official Raspberry Pi power supply
- Ethernet cable (for reliable connectivity)
- A small case with passive cooling

## Initial Setup

### Install Raspberry Pi OS

Download the Raspberry Pi Imager and flash Raspberry Pi OS Lite (64-bit) to your microSD card. Enable SSH during the setup process.

```bash
# After first boot, update the system
sudo apt update && sudo apt upgrade -y
```

### Static IP Address

Set a static IP so your services are always reachable:

```bash
sudo nmcli con mod "Wired connection 1" \
  ipv4.addresses 192.168.1.100/24 \
  ipv4.gateway 192.168.1.1 \
  ipv4.dns "1.1.1.1,8.8.8.8" \
  ipv4.method manual
```

## Services I Run

### Pi-hole (DNS-level ad blocking)

Pi-hole blocks ads at the DNS level for your entire network.

```bash
curl -sSL https://install.pi-hole.net | bash
```

### Nginx Proxy Manager

A reverse proxy with a nice UI for managing SSL certificates and routing.

### Uptime Kuma

A self-hosted monitoring tool to keep an eye on your services.

## Docker Setup

Docker makes it easy to run and manage multiple services:

```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
```

Create a `docker-compose.yml` for your services:

```yaml
services:
  uptime-kuma:
    image: louislam/uptime-kuma:1
    container_name: uptime-kuma
    volumes:
      - ./uptime-kuma-data:/app/data
    ports:
      - "3001:3001"
    restart: unless-stopped
```

## Lessons Learned

1. **Start small**: Don't try to set up everything at once
2. **Backup your SD card**: SD cards can fail; regular backups are essential
3. **Monitor temperature**: The Pi 5 can run hot under load
4. **Document everything**: Future you will thank present you

## What's Next

I'm planning to add a NAS for media storage and experiment with Kubernetes (K3s) for container orchestration. Stay tuned for future posts.
