# Resource Burner

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node Version](https://img.shields.io/badge/node-%3E%3D%2016.0.0-brightgreen)
![Platform](https://img.shields.io/badge/platform-macOS%20%7C%20Linux%20%7C%20Windows-lightgrey)

> **A lightweight, zero-dependency CLI tool to intentionally stress a machine's CPU and RAM.**  
> Perfect for testing VPS limits, debugging auto-scaling groups, or verifying monitoring alerts.

---

## 📦 Installation

You can use it directly via `npx` (recommended) or install it globally.

### Using npx
```bash
npx resource-burner
```

### Global Install
```bash
npm install -g resource-burner
```

---

## Usage

Simply run the command to start stressing your system. By default, it uses **all available CPU cores** and **80% of total system memory**.

```bash
burn
```

### Custom Configurations

**Stress 2 CPU cores and 512MB RAM for 30 seconds:**
```bash
burn --cpu 2 --memory 512 --time 30
```

**Stress only memory (leave CPU default):**
```bash
burn --memory 2048
```

---

## ⚙️ Options

| Option | Alias | Description | Default |
| :--- | :---: | :--- | :--- |
| `--cpu` | `-c` | Number of CPU cores to spin up workers for. | `os.cpus().length` (All) |
| `--memory` | `-m` | Amount of RAM to allocate in MB. | `80%` of Total RAM |
| `--time` | `-t` | Duration in seconds before auto-exit. | `Infinite` (Until Ctrl+C) |

---

## 💻 Programmatic Usage

You can use `resource-burner` in your own Node.js scripts. It supports both **CommonJS** and **ES Modules**.

### CommonJS
```javascript
const { run } = require('resource-burner');

// Stress for 10 seconds
run({ cpu: 4, memory: 1024, duration: 10000 });
```

### ES Modules
```javascript
import { run } from 'resource-burner';

await run({ cpu: 4, memory: 1024, duration: 10000 });
```

---

## ⚠️ Disclaimer & Safety Warning

> [!CAUTION]
> **USE AT YOUR OWN RISK.**
>
> This software is provided "as is", without warranty of any kind. It is designed to **aggressively consume system resources** which may lead to:
>
> *   **System Unresponsiveness**: Your UI may freeze or become sluggish.
> *   **System Crashes**: Kernel panics, Blue Screens of Death, or unexpected reboots.
> *   **OOM Kills**: The OS may kill other critical processes to reclaim memory.
>
> **Do not run this on production environments** unless you strictly intend to test failure scenarios.

---

## License

This project is licensed under the [MIT License](LICENSE).
