import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  SiMicrosoftazure,
  SiAmazonaws,
  SiVmware,
  SiPowershell,
  SiPython,
  SiGnubash,
  SiCisco,
  SiWindows,
  SiLinux,
  SiDocker,
} from "react-icons/si";

const SpinningSkillsWheel = () => {
  const { width } = useWindowSize();

  const [sizes, setSizes] = useState({
    radiusToCenterOfIcons: RADIUS_TO_CENTER_OF_ICONS.lg,
    iconWrapperWidth: ICON_WRAPPER_WIDTH.lg,
    ringPadding: RING_PADDING.lg,
    logoFontSize: LOGO_FONT_SIZE.lg,
  });

  useEffect(() => {
    if (!width) return;

    if (width < BREAKPOINTS.sm) {
      setSizes({
        radiusToCenterOfIcons: RADIUS_TO_CENTER_OF_ICONS.sm,
        iconWrapperWidth: ICON_WRAPPER_WIDTH.sm,
        ringPadding: RING_PADDING.sm,
        logoFontSize: LOGO_FONT_SIZE.sm,
      });
    } else if (width < BREAKPOINTS.md) {
      setSizes({
        radiusToCenterOfIcons: RADIUS_TO_CENTER_OF_ICONS.md,
        iconWrapperWidth: ICON_WRAPPER_WIDTH.md,
        ringPadding: RING_PADDING.md,
        logoFontSize: LOGO_FONT_SIZE.md,
      });
    } else {
      setSizes({
        radiusToCenterOfIcons: RADIUS_TO_CENTER_OF_ICONS.lg,
        iconWrapperWidth: ICON_WRAPPER_WIDTH.lg,
        ringPadding: RING_PADDING.lg,
        logoFontSize: LOGO_FONT_SIZE.lg,
      });
    }
  }, [width]);

  const fullSize =
    sizes.radiusToCenterOfIcons + sizes.iconWrapperWidth + sizes.ringPadding;
  const innerSize =
    sizes.radiusToCenterOfIcons - sizes.iconWrapperWidth - sizes.ringPadding;

  return (
    <div
      style={{
        position: "relative",
        width: fullSize / 2,
        height: fullSize,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          width: fullSize,
          height: fullSize,
        }}
      >
        <div
          style={{
            width: fullSize,
            height: fullSize,
            display: "grid",
            placeContent: "center",
            borderRadius: "50%",
            background: "rgba(254, 254, 254, 0.05)",
            boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.3)",
          }}
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={TRANSITION}
            style={{
              width: innerSize,
              height: innerSize,
              position: "relative",
              display: "grid",
              placeItems: "center",
              borderRadius: "50%",
              background: "#171717",
              boxShadow: "0 0 30px rgba(0, 0, 0, 0.5)",
            }}
          >
            {/* Center Logo/Text */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: -360 }}
              transition={TRANSITION}
              style={{
                fontSize: sizes.logoFontSize,
                fontWeight: "700",
                textTransform: "uppercase",
                color: "#fefefe",
                fontFamily: "Montserrat, sans-serif",
                textAlign: "center",
              }}
            >
              SKILLS
            </motion.div>

            {/* Rotating Icons */}
            {ICON_DATA.map((icon, idx) => {
              const degrees = (360 / ICON_DATA.length) * idx;
              return (
                <motion.div
                  key={idx}
                  style={{
                    marginTop:
                      sizes.radiusToCenterOfIcons *
                      Math.sin(degreesToRadians(degrees)),
                    marginLeft:
                      sizes.radiusToCenterOfIcons *
                      Math.cos(degreesToRadians(degrees)),
                    width: sizes.iconWrapperWidth,
                    height: sizes.iconWrapperWidth,
                    position: "absolute",
                    display: "grid",
                    placeContent: "center",
                    borderRadius: "50%",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                    background: icon.bg,
                    color: icon.color,
                  }}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: -360 }}
                  transition={TRANSITION}
                >
                  <icon.Icon
                    style={{
                      fontSize: sizes.logoFontSize,
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SpinningSkillsWheel;

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const degreesToRadians = (degrees) => {
  return degrees * (Math.PI / 180);
};

const ICON_DATA = [
  {
    Icon: SiMicrosoftazure,
    bg: "#0078D4",
    color: "#ffffff",
  },
  {
    Icon: SiAmazonaws,
    bg: "#FF9900",
    color: "#232F3E",
  },
  {
    Icon: SiVmware,
    bg: "#607078",
    color: "#ffffff",
  },
  {
    Icon: SiPowershell,
    bg: "#5391FE",
    color: "#ffffff",
  },
  {
    Icon: SiPython,
    bg: "#3776AB",
    color: "#FFD43B",
  },
  {
    Icon: SiGnubash,
    bg: "#4EAA25",
    color: "#ffffff",
  },
  {
    Icon: SiCisco,
    bg: "#1BA0D7",
    color: "#ffffff",
  },
  {
    Icon: SiWindows,
    bg: "#0078D6",
    color: "#ffffff",
  },
  {
    Icon: SiLinux,
    bg: "#FCC624",
    color: "#000000",
  },
  {
    Icon: SiDocker,
    bg: "#2496ED",
    color: "#ffffff",
  },
];

const RADIUS_TO_CENTER_OF_ICONS = {
  sm: 150,
  md: 225,
  lg: 325,
};

const ICON_WRAPPER_WIDTH = {
  sm: 35,
  md: 50,
  lg: 65,
};

const RING_PADDING = {
  sm: 4,
  md: 6,
  lg: 8,
};

const LOGO_FONT_SIZE = {
  sm: 16,
  md: 20,
  lg: 28,
};

const BREAKPOINTS = {
  sm: 480,
  md: 768,
};

const TRANSITION = {
  repeat: Infinity,
  repeatType: "loop",
  duration: 40,
  ease: "linear",
};
