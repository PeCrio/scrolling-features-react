import React, { ReactNode, useEffect, useRef, useState } from "react";
import { FeatureItem, AdFeature, FeatureListItem } from "./FeatureItem";
import "../index.css";

type Props = {
  features: AdFeature[];
  trackingBall?: ReactNode;
  trackingLineColor?: string;
  trackingLineFadeColor?: string;
  lineTrail?: ReactNode;
};

export const ScrollingFeatures: React.FC<Props> = ({
  features = [],
  trackingBall: customTrackingBall,
  trackingLineFadeColor,
  trackingLineColor = "blue",
  lineTrail: customLineTrail,
}) => {
  const [intersectingEntries, setIntersectingEntries] = useState<
    Record<string, boolean>
  >({});

  const [featureList, setFeatureList] = useState<FeatureListItem[]>([]);
  const [showAll, setShowAll] = useState(false);
  const trackingBallRef = useRef<HTMLDivElement>(null);

  const generateId = () => {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 10) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  };

  const handleFeatureScrolling = () => {
    const trackingBallElementTop =
      trackingBallRef?.current?.getBoundingClientRect().top ?? 700;

    const scrollableHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const scrollingFeatureItems = document.querySelectorAll(
      "#sfr-feature-list-item"
    );

    scrollingFeatureItems.forEach((featureElement) => {
      const featureElementTop = featureElement.getBoundingClientRect().top;
      const featureId = featureElement.getAttribute(
        "data-feature-id"
      ) as string;

      if (window.scrollY >= scrollableHeight) {
        setShowAll(true);
        setIntersectingEntries((prevItems) => ({
          ...prevItems,
          [featureId]: true,
        }));
      } else if (trackingBallElementTop >= featureElementTop) {
        setShowAll(false);
        setIntersectingEntries({
          [featureId]: true,
        });
      }
    });
  };

  useEffect(() => {
    window && window.addEventListener("scroll", handleFeatureScrolling);

    if (features.length) {
      const newFeatureList = features.map((feature) => ({
        ...feature,
        id: generateId(),
      }));

      setFeatureList(newFeatureList);
      setIntersectingEntries({ [newFeatureList[0].id]: true });
    }

    return () => {
      window.removeEventListener("scroll", handleFeatureScrolling);
    };
  }, []);

  if (!features.length) {
    return null;
  }

  return (
    <div>
      {/* Beginning tracking line mask */}
      <div className="sfr-relative sfr-h-10 sfr-flex">
        {trackingLineFadeColor && (
          <div
            className={`sfr-bg-gradient-to-b sfr-z-10 sfr-hidden lg:sfr-block sfr-top-0 sfr-inset-x-0 sfr-h-5 sfr-absolute sfr-w-[4px] sfr-translate-x-[-2px] lg:sfr-left-[50%]`}
            style={{
              background: `linear-gradient(${trackingLineFadeColor} 50%, transparent)`,
            }}
          ></div>
        )}
        <div
          className={`sfr-hidden lg:sfr-block sfr-inset-x-0 sfr-h-full sfr-absolute sfr-w-[2px] sfr-translate-x-[-2px] lg:sfr-left-[50%]`}
          style={{ backgroundColor: trackingLineColor }}
        ></div>
      </div>
      <div id="package-mask">
        <div className="sfr-relative sfr-isolate sfr-z-0">
          {/* Line trail */}
          <LineTrail customLineTrail={customLineTrail} />
          <div className="sfr-inset-0 lg:sfr-absolute sfr-h-full sfr-w-full lg:sfr-items-start lg:sfr-flex lg:sfr-justify-center sfr-z-0">
            <div
              className={`sfr-top-0 sfr-w-full sfr-flex lg:sfr-justify-center sfr-sticky -sfr-mt-64`}
            >
              {/* Desktop tracking line */}
              <div className="lg:sfr-flex sfr-hidden lg:sfr-visible lg:sfr-justify-center sfr-sticky">
                <div
                  className={`sfr-w-[2px] sfr-transform sfr-transition-all sfr-duration-1000 ${
                    showAll ? "sfr-h-[100vh]" : "sfr-h-64"
                  }`}
                  style={{ backgroundColor: trackingLineColor }}
                ></div>
              </div>
            </div>
          </div>
          <div className="sfr-inset-0 lg:sfr-absolute sfr-h-full sfr-w-full lg:sfr-items-start lg:sfr-flex lg:sfr-justify-center sfr-z-20">
            {/* Tracking ball */}
            <div className="sfr-absolute sfr-h-full sfr-z-20">
              <div
                ref={trackingBallRef}
                className={`sfr-sticky lg:sfr-flex lg:sfr-visible sfr-invisible sfr-justify-center sfr-self-center sfr-transform sfr-transition-all sfr-duration-1000 sfr-top-[20vh] -sfr-translate-x-[50%] lg:sfr-translate-x-0 ${
                  showAll ? "lg:sfr-top-[100vh]" : " lg:sfr-top-64"
                }`}
              >
                {customTrackingBall ? (
                  customTrackingBall
                ) : (
                  <div className="sfr-w-7 sfr-h-7 sfr-rounded-full sfr-border-2 sfr-border-white sfr-ring-blue-500 sfr-ring">
                    <div id="ball"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Feature listing */}
          <div>
            {featureList &&
              featureList.map((feature) => (
                <FeatureItem
                  key={feature.id}
                  feature={feature}
                  intersectingEntries={intersectingEntries}
                  trackingLineColor={trackingLineColor}
                  showAll={showAll}
                ></FeatureItem>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const LineTrail: React.FC<{ customLineTrail: ReactNode }> = ({
  customLineTrail,
}) => {
  return (
    <div className="sfr-flex lg:sfr-justify-center sfr-w-full sfr-h-full sfr-absolute sft-top-0 ">
      {customLineTrail ? (
        customLineTrail
      ) : (
        <div
          className="sfr-w-[2px] -sfr-translate-x-[50%] lg:sfr-translate-x-0 sfr-h-full sfr-from-gray-300 sfr-bg-repeat-y"
          style={{
            backgroundImage:
              "linear-gradient(180deg, transparent, transparent 50%, var(--tw-gradient-from) 50%, var(--tw-gradient-from) 100%)",
            backgroundSize: "2px 10px",
          }}
        ></div>
      )}
    </div>
  );
};
