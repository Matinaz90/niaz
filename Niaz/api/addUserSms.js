let inTime = true;

function startTimer() {
  inTime = true;
  let seconds = 0;
  const interval = setInterval(() => {
    seconds += 1;
    if (seconds >= 120) {
      clearInterval(interval);
      // inTime = false;
    }
  }, 10000);
}

async function AddUser(number, userName) {
  try {
    const res = await fetch("https://localhost:443/smsSend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phone: number,
        name: userName,
      }),
    });

    if (!res.ok) {
      return { ok: false };
    }

    startTimer();

    return { ok: true };
  } catch (error) {
    return { ok: false };
  }
}

async function CheckCode(number, userName, CodeEntered) {
  try {


    if (!inTime) return { ok: false };
    
    const res = await fetch("https://localhost:443/checkloginCode", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: userName,
        phone: number,
        code: String(CodeEntered),
      }),
    });

    if (!res.ok) return { ok: false };

    return { ok: true }
  } catch (err) {
    return { ok: false };
  }
}

export { AddUser, CheckCode };
