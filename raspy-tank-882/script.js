let arr = [
  "https://media.istockphoto.com/id/545286388/photo/chinese-food-blank-background.jpg?b=1&s=170667a&w=0&k=20&c=ipMtvr-QmWrqBWleY3aVy7-uiyw9NYqTT6nm8vfuVRc=",
  "https://assets.architecturaldigest.in/photos/60084f39f93542952b665f27/master/w_1600%2Cc_limit/Mumbai-restaurant-COVID-19-2.jpg",
  "http://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/02/FotoJetcoverindianrest.jpg",
  "https://geekrobocook.com/wp-content/uploads/2021/01/56_Paneer-Butter-Masala.jpg",
  "https://dishesandflavors.com/wp-content/uploads/2021/01/Veg-Chow-Mein-1024x683.jpg",
  "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg",
];

let slider = document.getElementById("slider_div");
arr.forEach((ele, ind) => {
  let images = document.createElement("img");
  images.setAttribute("src", ele).width = "100%";

  slider.append(images);
});
