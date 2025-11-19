let inTime = false;

function startTimer() {
  inTime = true;
  let seconds = 0;
  const interval = setInterval(() => {
    seconds += 1;
    if (seconds >= 60) {
      clearInterval(interval);
      inTime = false;
    }
  }, 1000);
}

async function AddUser(number, userName) {
  try {
    const val = await fetch("https://localhost:443/smsSend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phone: number,
        name: userName,
      }),
    });
  } catch {
    return false;
  }
  startTimer();
  return true
}

async function CheckCode(number, userName, CodeEntered) {
  try {
    if (!inTime) return false;
    
    const res = await fetch("https://localhost:443/checkloginCode", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phone: number,
        name: userName,
        code: CodeEntered,
      }),
    });

    if (!res.ok) return false;

    const isValid = await res.json();

    if (isValid) {
      console.log("✅ Correct code, proceed to signup");
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
}

export { AddUser, CheckCode };
