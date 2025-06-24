
const backendUrl = "https://mera-box-backend-1.onrender.com";

function playVideo() {
  const url = document.getElementById("videoUrl").value;
  const iframe = document.getElementById("videoPlayer");
  iframe.style.display = "block";
  iframe.src = url;
}

async function downloadVideo() {
  const url = document.getElementById("videoUrl").value;
  const format = document.getElementById("formatSelect").value;

  const response = await fetch(`${backendUrl}/download`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url, format })
  });

  if (!response.ok) {
    alert("Download failed!");
    return;
  }

  const blob = await response.blob();
  const downloadUrl = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = downloadUrl;
  a.download = "video." + format;
  a.click();
}
