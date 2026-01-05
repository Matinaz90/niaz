async function CheckCookie() {
  try {
    const res = await fetch("http://localhost:443/checkCookie", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({}),
    });

    if (!res.ok) {
      return { ok: false };
    }

    return { ok: true };
  } catch (error) {
    return { ok: false };
  }
}