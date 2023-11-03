var arr = [
  {
    dp: "https://images.unsplash.com/photo-1572470176170-98fa8abcb741?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwdHJhZGl0aW9uYWwlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1535443412024-5c6e8cbe0730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwdHJhZGl0aW9uYWwlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    dp: "https://images.unsplash.com/photo-1617039487629-6babdcb2a24b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMHRyYWRpdGlvbmFsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1600687436073-86a81c9b0daa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMHRyYWRpdGlvbmFsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },

  {
    dp: "https://images.unsplash.com/photo-1470163395405-d2b80e7450ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluZGlhbiUyMHRyYWRpdGlvbmFsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1609351231656-9285d74d363d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwdHJhZGl0aW9uYWwlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    dp: "https://media.istockphoto.com/id/1493548317/photo/beautiful-hindu-indian-young-women-lightening-diya.jpg?s=1024x1024&w=is&k=20&c=DEAnby7thhuCALJq7sXJBUl4GqcwOJKgRYVwoBxEUYQ=",story:"https://media.istockphoto.com/id/1288003164/photo/portrait-of-an-indian-bengali-beautiful-brunette-woman-in-front-of-the-colorful-light-bokeh.jpg?s=612x612&w=0&k=20&c=g8bSsUWWo0hqzH1JntXeQliX4XwGgPlxP25N797QkQk="},
];

var storiyan = document.querySelector(".storiyan")
var clutter = ""

arr.forEach(function(elem,idx){
       clutter += `<div  class = "story">
       <img id="${idx}" src="${elem.dp}">
       </div>`
});  


storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function(dets){
  document.querySelector(".fullscreen").style.display = "block"
  document.querySelector(".fullscreen").style.backgroundImage = `url(${arr[dets.target.id].story})`

  setTimeout(function(){
    document.querySelector(".fullscreen").style.display = "none"
  },3000)
});

