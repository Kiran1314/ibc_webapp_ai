'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const MASTER_IMAGES = [
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slides%2FHP_1-2.webp?alt=media&token=154bc19c-f0c5-45a0-b775-a53efc454fa9",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slides%2FHP_2.webp?alt=media&token=b7f47f62-1e2e-4240-9ad8-1679df45c4ee",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slides%2FHP_3.webp?alt=media&token=ca501b00-ea73-49fa-b803-278ad4c8c577",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_4.webp?alt=media&token=c0fd58e1-ce38-414c-aa24-e7ed23a895e1",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_5.webp?alt=media&token=46b06470-576b-4b63-b376-e73321532bd6",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_6.webp?alt=media&token=8994c640-153e-4325-8766-90f15aa47a30",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_7.webp?alt=media&token=04a356d9-2752-43b7-b07f-d13817ba7b9c",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_8.webp?alt=media&token=d5ab1265-a11d-459f-8406-86fac2bf0486",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_9.webp?alt=media&token=115b7eda-6b66-4e49-9085-21d71c72834c",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_10.webp?alt=media&token=666437fd-a5b4-45d9-bf65-65d55cc29e84",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_11.webp?alt=media&token=d7a0cfab-665b-4443-b375-90489724eb34",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_12.webp?alt=media&token=b95ea1c0-78b4-4081-84d3-f8db59783383",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_13.webp?alt=media&token=4926c252-9504-4ac4-aab4-adc5671d2a34",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_14.webp?alt=media&token=793e3d2b-db6d-4864-9906-f67c72d45f34",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_15.webp?alt=media&token=c2a46137-1eb2-471a-8b91-ee172e56f5fa",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_16.jpg?alt=media&token=7ec35f78-64ba-40a7-be63-e4c57c5c4555",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_17.webp?alt=media&token=da651a68-8d70-417d-8529-260662c6d91c",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_18.webp?alt=media&token=0102f0b5-6d49-40ec-8713-76bd26c39d8e",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_19.webp?alt=media&token=1d164d0b-8318-4177-8eee-fc76f91ee036",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_20.webp?alt=media&token=7926b731-0cd1-4450-8ac9-a75bedcc69aa",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_21.webp?alt=media&token=12c04d32-fe66-4e4c-ba72-15242a40e3b4",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_22.webp?alt=media&token=7aa0d9d5-95b0-464a-8092-86b3dd2a5b0e",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_23.webp?alt=media&token=4a469108-1268-42c3-a2cd-93c610044e98",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_24.webp?alt=media&token=3508172c-be9a-44ab-960a-693999e83cdc",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_25.webp?alt=media&token=5e525a14-f771-4653-a6f3-3d49779d7df3",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_26.webp?alt=media&token=8e0dac27-cd4a-4423-8f21-3d1fa9585bb6",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_27.webp?alt=media&token=8331e6e0-ab65-4d26-9305-4fd10aa81dcb",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_28.jpg?alt=media&token=be54386b-2886-453f-a9d4-b055dc2afabb",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_29.webp?alt=media&token=59436439-0714-4728-aa61-2b41efc69e84",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_30.webp?alt=media&token=abba9927-70fa-42cc-8748-834aeea75abc",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_31.webp?alt=media&token=520e2b0a-f8ab-42e8-9f42-3258c73c19c3",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_32.webp?alt=media&token=56d49585-1067-4b2e-aab0-df39e0ea0f59",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_33.webp?alt=media&token=c4e948be-8037-4878-938b-eef0430459fc",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_34.webp?alt=media&token=c0ca558a-21a4-4e80-9906-59cdf75e7415",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_35.webp?alt=media&token=f844d573-55b0-440e-8083-7d04ea615b1b",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_36.webp?alt=media&token=a707ac55-95dc-4fbb-9a1c-1c0270896cab",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_37.webp?alt=media&token=bad44435-b594-4848-8656-9e846bd53e94",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_38.webp?alt=media&token=a3e46165-238a-4f69-a557-4471fd276cdd",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_39.webp?alt=media&token=82b03478-954b-4e1e-a3e8-feb5ac23b2ed",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_40.webp?alt=media&token=35f9856b-c6d6-4dcd-af55-b76c78972f0e",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_41.webp?alt=media&token=98d4295c-5f94-44d1-a571-a0995cfa0b29",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_42.webp?alt=media&token=bea01fc4-3d47-47c6-9510-6320bee4b422",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_43.webp?alt=media&token=ffb0febf-55d3-4044-a060-a8eec6359ab9",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_44.webp?alt=media&token=4ea9d9ba-87da-4fc2-866e-cc862a86df79",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_45.webp?alt=media&token=4eb31681-3e48-492b-9c9e-9f21dcfd3565",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_46.webp?alt=media&token=262dea4a-415e-4dc1-b501-df431efe412d",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_47.webp?alt=media&token=61500016-1d31-4b07-90f2-896674e7c13e",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_48.webp?alt=media&token=1be01437-27ae-4747-8ed5-6630a25da8a1",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_49.webp?alt=media&token=1ebe7182-1558-425a-a29f-9897df6e9c92",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_50.webp?alt=media&token=342dd2e1-2b47-4567-8b95-7cef21ee5fe3",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_51.webp?alt=media&token=f447b8f4-48a8-4e05-888d-0cca2ca99cbd",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_52.webp?alt=media&token=fecfcef8-57ee-41fb-a5bd-4fc41b42c1c7",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_53.webp?alt=media&token=14e9a9f4-fa20-4c56-93dc-a31abc57a2c7",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_54.webp?alt=media&token=516c06a3-8b5e-482c-86b3-24f7bcd68a59",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_55.webp?alt=media&token=63e87b4e-7b79-4fb1-9435-5002264d8bac"
];

export default function ImageSlider() {
  // Track 3 visible slots independently
  const [visibleSlots, setVisibleSlots] = useState([0, 1, 2]);

  // Handle manual click on any slot to instantly swap it with a random unused image
  const handleImageClick = (slotIndex) => {
    setVisibleSlots((currentSlots) => {
      const newSlots = [...currentSlots];
      // Find an image index from master pool that isn't currently displayed
      const availableIndices = MASTER_IMAGES.map((_, idx) => idx).filter(
        (idx) => !newSlots.includes(idx)
      );
      if (availableIndices.length > 0) {
        const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
        newSlots[slotIndex] = randomIndex;
      }
      return newSlots;
    });
  };

  // Staggered asynchronous timers so each slot fades and changes at a different time
  useEffect(() => {
    const timers = [
      setInterval(() => { handleImageClick(0); }, 3500), // Slot 1 changes every 3.5s
      setInterval(() => { handleImageClick(1); }, 4800), // Slot 2 changes every 4.8s
      setInterval(() => { handleImageClick(2); }, 4200)  // Slot 3 changes every 4.2s
    ];

    return () => {
      timers.forEach((t) => clearInterval(t));
    };
  }, []);

  return (
    <div className="slider-wrapper" style={{ height: '300px', position: 'relative', width: '100%', margin: '0 auto' }}>
      
      {/* Preload all master images invisibly */}
      <div style={{ display: 'none' }} aria-hidden="true">
        {MASTER_IMAGES.map((url, idx) => (
          <img key={idx} src={url} alt="" />
        ))}
      </div>

      <div style={{ 
        position: 'relative', 
        width: '100%', 
        height: '100%', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '15px' 
      }}>
        {visibleSlots.map((imgIndex, slotIndex) => (
          <div 
            key={slotIndex} 
            onClick={() => handleImageClick(slotIndex)}
            title="Click to swap image"
            style={{ 
              position: 'relative', 
              height: '300px', 
              borderRadius: '12px', 
              overflow: 'hidden', 
              cursor: 'pointer',
              backgroundColor: '#111'
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={imgIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
              >
                <Image 
                  src={MASTER_IMAGES[imgIndex]} 
                  alt={`Portfolio Showcase ${imgIndex}`} 
                  fill 
                  style={{ objectFit: 'cover' }} 
                  unoptimized 
                  priority
                />
                
                {/* Hover overlay with interactive switch icon */}
                <div 
                  className="slider-hover-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0, 0, 0, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    zIndex: 2
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
                >
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    color: '#ffffff'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 4 23 10 17 10"></polyline>
                      <polyline points="1 20 1 14 7 14"></polyline>
                      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                    </svg>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}