import React from "react";

type BasicAdFeature = {
  scrollingItem?: never;
  fixedItem?: never;
  title: string;
  description: string;
  imageUrl: string;
};

type CustomAdFeatureOptions = {
  isIntersecting: boolean;
};

type CustomAdFeature = {
  scrollingItem: (options: CustomAdFeatureOptions) => JSX.Element;
  fixedItem: (options: CustomAdFeatureOptions) => JSX.Element;
  title?: never;
  description?: never;
  imageUrl?: never;
};

export type AdFeature = BasicAdFeature | CustomAdFeature;
export type FeatureListItem = AdFeature & {
  id: string;
};

type Props = {
  intersectingEntries?: Record<string, boolean>;
  feature: FeatureListItem;
};
export const FeatureItem: React.FC<Props> = ({
  intersectingEntries,
  feature,
}) => {
  const isIntersecting = !!intersectingEntries?.[feature.id];

  return (
    <div
      id="sfr-feature-list-item"
      className="sfr-flex lg:sfr-gap-32 lg:sfr-flex-row sfr-flex-col sfr-group last:lg:sfr-h-auto sfr-relative sfr-isolate"
      data-feature-id={feature.id}
    >
      {/* Mobile Line follower */}
      <div
        className={`${
          isIntersecting ? "sfr-h-full" : "sfr-h-0"
        } sfr-w-[2px] sfr-translate-x-[-0.5px] sfr-z-10 sfr-absolute sfr-top-0 sfr-bg-blue-600 sfr-left-0 sfr-block lg:sfr-hidden sfr-transition sfr-origin-top sfr-transform sfr-duration-700`}
      ></div>
      {/* Bullet background mask */}
      <div className="sfr-w-4 sfr-h-7 sfr-z-10 sfr-bg-white sfr-scale-y-150 sfr-absolute sfr-left-0 lg:sfr-left-[50%] -sfr-translate-x-2 sfr-translate-y-[-0.4375rem]"></div>
      {/* Bullet point */}
      <div
        className={`${
          isIntersecting
            ? " sfr-ring-blue-500 sfr-ring  sfr-bg-blue-500"
            : " sfr-bg-gray-300"
        } sfr-transition sfr-duration-300 sfr-w-4 sfr-h-4 sfr-z-10 -sfr-translate-x-2 sfr-absolute sfr-left-0 lg:sfr-left-[50%] sfr-rounded-full sfr-border-2 sfr-border-white`}
      ></div>

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
          ${
            !feature.scrollingItem &&
            "sfr-bg-gray-50 sfr-border sfr-border-gray-200 sfr-p-8 sfr-rounded-md sfr-flex sfr-justify-center sfr-items-start"
          }
          `}
        >
          {feature.scrollingItem ? (
            feature.scrollingItem({ isIntersecting })
          ) : (
            <img
              className="sfr-w-48 sfr-object-contain lg:sfr-w-64"
              src={feature.imageUrl}
            />
          )}
        </div>
      </div>
      {/* Fixed Item */}
      <div className="sfr-flex-1 sfr-w-full sfr-self-stretch sfr-order-1 lg:sfr-order-2 sfr-text-left">
        <div className="sfr-h-full">
          <div className="sfr-flex-1 sfr-h-full sfr-ml-6 lg:sfr-pl-0">
            {feature.fixedItem ? (
              feature.fixedItem({ isIntersecting })
            ) : (
              <>
                {/* Title */}
                <h4
                  className={`${
                    isIntersecting ? "sfr-text-blue-600" : "sfr-text-gray-300"
                  } sfr-transition sfr-duration-300 sfr-text-2xl lg:sfr-text-3xl -sfr-mt-3`}
                  id={feature.id}
                >
                  {feature.title}
                </h4>
                {/* Description */}
                <p
                  className={`${
                    isIntersecting ? "sfr-text-gray-600" : "sfr-text-gray-300"
                  } sfr-transition sfr-duration-300 sfr-mt-4`}
                >
                  {feature.description}
                </p>
                {/* Link */}
                <button
                  className={`${
                    isIntersecting ? "sfr-text-blue-600" : "sfr-text-gray-300"
                  } sfr-text-md sfr-font-medium sfr-mt-4 sfr-mb-8 lg:sfr-mb-32 lg:group-last:sfr-mb-0 sfr-transition sfr-duration-300`}
                >
                  Learn more
                  <span className="sfr-ml-1">&gt;</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
