body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
}

.image-zoom-container {
    position: relative;
    overflow: hidden;
}

#zoom-image {
    width: 300px; /* Set to desired size */
    height: auto;
    transition: transform 0.2s ease; /* Smooth zoom effect */
}

.image-zoom-container:hover #zoom-image {
    transform: scale(1.5); /* Scales the image on hover */
    cursor: pointer; /* Changes the cursor to a pointer */
}

.h1 {
  background: black;
  
  
}