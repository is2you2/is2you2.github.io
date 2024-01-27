// Save a value to the Capacitor KV store
addEventListener('BackgroundOn', async (resolve, reject, args) => {
    try {
        CapacitorKV.set('status', 'true');
        resolve();
    } catch (err) {
        console.error(err);
        reject(err);
    }
});

addEventListener('BackgroundOff', async (resolve, reject, args) => {
    try {
        CapacitorKV.set('status', 'false');
        resolve();
    } catch (err) {
        console.error(err);
        reject(err);
    }
});

// Get a value from the Capacitor KV store
addEventListener('testLoad', async (resolve, reject, args) => {
    try {
        const value = CapacitorKV.get('status');
        resolve(value);
    } catch (err) {
        console.error(err);
        resolve('false');
    }
});