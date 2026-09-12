const CONFIG={SWIGGY_URL:"",ZOMATO_URL:"",INSTAGRAM_URL:"",CONTACT_URL:""};
const menu=[
 {name:"Tamarind Pulihora",cat:"rice",desc:"Tangy, nutty and comforting.",signature:true},
 {name:"Lemon Pulihora",cat:"rice",desc:"Bright, familiar and fresh."},
 {name:"Zeera Rice",cat:"rice",desc:"Fragrant cumin-seasoned rice."},
 {name:"Tomato Rice",cat:"rice",desc:"Warm, homely tomato rice."},
 {name:"Kothimeera Rice",cat:"rice",desc:"Fresh coriander-led comfort."},
 {name:"Pudina Rice",cat:"rice",desc:"Aromatic mint rice."},
 {name:"Pappu Charu Rice",cat:"rice",desc:"Rice with a comforting Andhra classic."},
 {name:"Pappu Aavakai Rice",cat:"rice",desc:"A familiar pairing with character."},
 {name:"Curd Rice",cat:"rice",desc:"Cool, simple and comforting."},
 {name:"Chicken Pulav",cat:"chicken",desc:"A hearty bowl of fragrant rice and chicken."},
 {name:"Chicken Fry",cat:"chicken",desc:"Crisp, spiced chicken."},
 {name:"Chicken Fry Piece Biriyani",cat:"chicken",desc:"A generous biriyani bowl."},
 {name:"Bagara Rice + Veg Curry",cat:"chicken",desc:"Fragrant rice with a vegetable curry."},
 {name:"Omelette Variants",cat:"egg",desc:"Simple egg favourites, made to order."}
];
const list=document.getElementById("menuList");
function renderMenu(filter="all"){
 const items=filter==="all"?menu:menu.filter(x=>x.cat===filter);
 list.innerHTML=items.map((x,i)=>`<article class="menu-item"><span class="menu-index">${String(i+1).padStart(2,"0")}</span><div><div class="menu-name">${x.name}${x.signature?" <small style=\"font:700 .55rem Manrope;letter-spacing:.1em;color:var(--terracotta)\">SIGNATURE</small>":""}</div><div class="menu-desc">${x.desc}</div></div><span class="menu-price">₹XX</span></article>`).join("");
}
renderMenu();
document.querySelectorAll(".tabs button").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".tabs button").forEach(b=>b.classList.remove("active"));btn.classList.add("active");renderMenu(btn.dataset.filter)}));

document.querySelectorAll("[data-config]").forEach(el=>{const key=el.dataset.config;const value=CONFIG[key];if(value){el.href=value;el.target="_blank";el.rel="noopener"}else{el.addEventListener("click",e=>e.preventDefault());el.setAttribute("aria-label",`${key} placeholder — add URL in script.js`)}});
const menuButton=document.getElementById("menuButton"),mobileNav=document.getElementById("mobileNav");
menuButton.addEventListener("click",()=>{const open=mobileNav.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(open));mobileNav.setAttribute("aria-hidden",String(!open))});
mobileNav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{mobileNav.classList.remove("open");menuButton.setAttribute("aria-expanded","false");mobileNav.setAttribute("aria-hidden","true")}));
// Deliberately no scroll-driven animation, scroll hijacking, parallax or animation library.
