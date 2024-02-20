import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

const data = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1530021232320-687d8e3dba54?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGdpcmwlMjBiZWF1dGlmdWx8ZW58MHx8MHx8fDA%3D",
    name: "Alice",
    age: 23,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybCUyMGJlYXV0aWZ1bHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Eva",
    age: 25,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1545912453-3d32e20f72bf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybCUyMGJlYXV0aWZ1bHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Lily",
    age: 26,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1583396082380-01f674489d6b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjgzfHxnaXJsJTIwYmVhdXRpZnVsfGVufDB8fDB8fHww",
    name: "Olivia",
    age: 27,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1517805686688-47dd930554b2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzIyfHxnaXJsJTIwYmVhdXRpZnVsfGVufDB8fDB8fHww",
    name: "Sophia",
    age: 24,
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1622925492162-98c3760a7080?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTkzfHxnaXJsJTIwYmVhdXRpZnVsfGVufDB8fDB8fHww",
    name: "Ava",
    age: 26,
  },
];

export default function App() {
  return (
    <div className="container">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {data?.map((i) => (
          <SwiperSlide key={i.id} style={{ border: "5px" }}>
            <img src={i.image} alt="" />
            <p>
              {i.name}, <span>{i.age}</span>{" "}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
