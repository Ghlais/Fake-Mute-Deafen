# FakeMuteDeafen Plugin

## Overview

**FakeMuteDeafen** is a **BetterDiscord** plugin that allows you to join a voice channel, mute and deafen yourself, and then unmute to speak and listen without any restrictions. This plugin provides a unique way to interact with Discord's voice channels by intercepting and modifying WebSocket data.

---

## Features

- **Fake Mute & Deafen:** Automatically intercepts WebSocket data to modify mute and deafen states.
- **Custom Interception:** Replaces `"self_mute":false` with `"self_mute":true` for a seamless fake mute experience.
- **Start & Stop Support:** Plugin can be enabled and disabled without affecting Discord's overall functionality.
- **Console Logs:** Debug information is printed to the console for tracking changes.

---

## Installation

1. Download the plugin file: `FakeMuteDeafen.plugin.js`.
2. Place the file in the **BetterDiscord Plugins** folder:
   - Windows: `C:\Users\<YourUsername>\AppData\Roaming\BetterDiscord\plugins`
   - macOS: `~/Library/Application Support/BetterDiscord/plugins`
   - Linux: `~/.config/BetterDiscord/plugins`
3. Restart Discord.
4. Go to **User Settings** > **Plugins** and enable the plugin.

---

## Usage

1. Enable the plugin from the **Plugins** section in BetterDiscord.
2. Join any voice channel in Discord.
3. Mute and deafen yourself.
4. Interact with the plugin by unmuting and speaking or listening while the plugin fakes your mute state.
5. To join a different voice channel, reload Discord.

---

## Requirements

- **BetterDiscord** installed on your system.
- **BDFDB Library Plugin** must be installed for this plugin to work.  
  [Download BDFDB Library Plugin](https://mwittrien.github.io/downloader/?library)

---

## Author

- **Name:** Ghlais  
- **GitHub:** [https://github.com/Ghlais](https://github.com/Ghlais)  
- **Discord Server:** [Join Here](https://discord.gg/fF7SEMHqPh)

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## Disclaimer

This plugin modifies Discord's WebSocket data and may conflict with Discord's terms of service. Use at your own risk.
