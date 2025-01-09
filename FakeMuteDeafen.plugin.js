/**
 * @name FakeMuteDeafen
 * @author (Ghlais)
 * @version 1.0.0-beta
 * @description Join a voice channel, mute and deafen yourself, start and stop the plugin. Now you can unmute, listen, and speak!
 * @website https://github.com/Ghlais
 * @source https://github.com/Ghlais/Fake-Mute-Deafen/
 * @invite https://discord.gg/fF7SEMHqPh
 */

module.exports = (_ => {
    return !window.BDFDB_Global || (!window.BDFDB_Global.loaded && !window.BDFDB_Global.started) ? class {
        constructor(meta) {
            for (let key in meta) this[key] = meta[key];
        }
        getName() { return "Fake Mute & Deafen"; }
        getAuthor() { return "Ghlais"; }
        getVersion() { return "1.0.0-beta"; }
        getDescription() { return `The Library Plugin needed for ${this.getName()} is missing. Please install it.`; }

        load() {
            BdApi.alert("Error", "BDFDB Library is missing. Please install it from the official website.");
        }

        start() { this.load(); }
        stop() {}
    } : (([Plugin, BDFDB]) => {
        const textDecoder = new TextDecoder("utf-8");
        const textEncoder = new TextEncoder();

        function interceptWebSocket() {
            if (!WebSocket.prototype.original) {
                WebSocket.prototype.original = WebSocket.prototype.send;
                WebSocket.prototype.send = function (data) {
                    try {
                        if (data instanceof ArrayBuffer) {
                            let decodedData = textDecoder.decode(data);

                            if (decodedData.includes("self_deaf")) {
                                console.log("[FakeMuteDeafen] Found mute/deafen event. Modifying...");
                                decodedData = decodedData.replace('"self_mute":false', '"self_mute":true');
                                console.log("[FakeMuteDeafen] Modification complete.");
                                data = textEncoder.encode(decodedData);
                            }
                        }
                    } catch (err) {
                        console.error("[FakeMuteDeafen] Error intercepting WebSocket:", err);
                    }

                    WebSocket.prototype.original.apply(this, [data]);
                };
            }
        }

        function restoreWebSocket() {
            if (WebSocket.prototype.original) {
                WebSocket.prototype.send = WebSocket.prototype.original;
                delete WebSocket.prototype.original;
                console.log("[FakeMuteDeafen] Restored original WebSocket functionality.");
            }
        }

        return class FakeMuteDeafen extends Plugin {
            onStart() {
                interceptWebSocket();
                console.log("[FakeMuteDeafen] Plugin started. Fake mute and deafen is enabled.");
                BdApi.showToast("Fake Mute & Deafen Enabled", { type: "success" });
            }

            onStop() {
                restoreWebSocket();
                console.log("[FakeMuteDeafen] Plugin stopped. Fake mute and deafen is disabled.");
                BdApi.showToast("Fake Mute & Deafen Disabled", { type: "error" });
            }
        };
    })(window.BDFDB_Global.PluginUtils.buildPlugin({}));
})();
