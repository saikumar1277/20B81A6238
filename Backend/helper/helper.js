async function getToken() {
  const authData = await fetch("http://20.244.56.144/train/auth", {
    method: "POST",
    body: JSON.stringify({
      companyName: "Easy Railway",
      clientID: "5b32a8d2-34bd-4179-8fa3-d1995c3fc809",
      clientSecret: "gVXQtZptcLZIVmyp",
      ownerName: "sai kumar",
      ownerEmail: "kongarisaikumar12@gmail.com",
      rollNo: "20B81A6238",
    }),
  });
  const curData = await authData.json();
  return curData;
}

module.exports = { getToken };
