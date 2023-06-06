document.addEventListener("DOMContentLoaded", function() {
    // Images
    const imageGallery = document.getElementById("imageGallery");
    const imageContainer = imageGallery.querySelector(".gallery-container");
  
    const images = [
      "img/ListofMachines/1.png",
      "img/ListofMachines/2.png",
      "img/ListofMachines/3.png",
      "img/ListofMachines/4.jpeg",
      "img/ListofMachines/5.png",
      "img/ListofMachines/6.png",
      "img/ListofMachines/7.png",
      
      // Add more image URLs here
    ];
  
    images.forEach(imageUrl => {
      const img = document.createElement("img");
      img.src = imageUrl;
  
      const galleryItem = document.createElement("div");
      galleryItem.className = "gallery-item";
      galleryItem.appendChild(img);
  
      imageContainer.appendChild(galleryItem);
    });
  
    // Videos
    const videoGallery = document.getElementById("videoGallery");
    const videoContainer = videoGallery.querySelector(".gallery-container");
  
    const videos = [
      "videos/video1.mp4",
      "videos/video2.mp4",
      "videos/video3.mp4",
      // Add more video URLs here
    ];
  
    videos.forEach(videoUrl => {
      const video = document.createElement("video");
      video.src = videoUrl;
      video.controls = true;
  
      const galleryItem = document.createElement("div");
      galleryItem.className = "gallery-item";
      galleryItem.appendChild(video);
  
      videoContainer.appendChild(galleryItem);
    });
  });
  