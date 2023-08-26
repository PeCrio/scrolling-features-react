import React, { ReactNode } from "react";

export type AdFeatureOptions = {
  isIntersecting: boolean;
};

export type AdFeature = {
  scrollingItem: (options: AdFeatureOptions) => ReactNode;
  fixedItem: (options: AdFeatureOptions) => ReactNode;
  indicator?: (options: AdFeatureOptions) => ReactNode;
};

export type FeatureListItem = AdFeature & {
  id: string;
};

type Props = {
  intersectingEntries?: Record<string, boolean>;
  feature: FeatureListItem;
  trackingLineColor: string;
};
export const FeatureItem: React.FC<Props> = ({
  intersectingEntries,
  feature,
  trackingLineColor,
}) => {
  const isIntersecting = !!intersectingEntries?.[feature.id];

  return (
    <div
      id="sfr-feature-list-item"
      className="sfr-flex lg:sfr-gap-32 lg:sfr-flex-row sfr-flex-col sfr-group last:lg:sfr-h-auto sfr-relative sfr-isolate"
      data-feature-id={feature.id}
    >
      {/* Mobile tracking line */}
      <div
        style={{ backgroundColor: trackingLineColor }}
        className={`${
          isIntersecting ? "sfr-h-full" : "sfr-h-0"
        } sfr-w-[2px] sfr-translate-x-[-0.5px] sfr-z-10 sfr-absolute sfr-top-0 sfr-left-0 sfr-block lg:sfr-hidden sfr-transition sfr-origin-top sfr-transform sfr-duration-700`}
      ></div>
      {/* Feature indicator */}
      <div className="sfr-absolute sfr-z-10 sfr-w-full">
        <div className="sfr-relative sfr-flex sfr-justify-start lg:sfr-justify-center">
          {feature.indicator ? (
            feature.indicator({ isIntersecting })
          ) : (
            <>
              {/* Feature indicator background mask */}
              <div className="sfr-absolute sfr-w-4 sfr-h-12 -sfr-z-10 sfr-bg-white sfr-self-center lg:sfr-translate-x-0 -sfr-translate-x-[50%]"></div>
              {/* Feature indicator item */}
              <div
                className={`${
                  isIntersecting
                    ? " sfr-ring-blue-500 sfr-ring sfr-bg-blue-500"
                    : " sfr-bg-gray-300"
                } sfr-transition sfr-duration-300 sfr-w-4 sfr-h-4 sfr-rounded-full sfr-border-2 sfr-border-white lg:sfr-translate-x-0 -sfr-translate-x-[50%]`}
              ></div>
            </>
          )}
        </div>
      </div>
      {/* Scrolling Item */}
      <div className="sfr-flex-1 sfr-w-full sfr-order-2 lg:sfr-order-1">
        <div
          className={`
          sfr-transition sfr-duration-300 lg:-sfr-mb-96 sfr-sticky sfr-top-64 group-last:sfr-mb-0 sfr-z-20 sfr-ml-6 lg:sfr-ml-0 sfr-mb-16
          ${
            isIntersecting
              ? "sfr-opacity-100 sfr-scale-100"
              : "lg:sfr-opacity-0 lg:sfr-scale-50"
          }
          `}
        >
          {feature.scrollingItem({ isIntersecting })}
        </div>
      </div>
      {/* Fixed Item */}
      <div className="sfr-flex-1 sfr-w-full sfr-self-stretch sfr-order-1 lg:sfr-order-2 sfr-text-left">
        <div className="sfr-h-full">
          <div className="sfr-flex-1 sfr-h-full sfr-ml-6 lg:sfr-pl-0">
            {feature.fixedItem({ isIntersecting })}
          </div>
        </div>
      </div>
    </div>
  );
};
