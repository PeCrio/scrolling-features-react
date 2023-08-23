import React from "react";

type BaseAdFeature = {
  id: string;
};

type BasicAdFeature = BaseAdFeature & {
  customPicture?: never;
  customDescription?: never;
  title: string;
  description: string;
  imageUrl: string;
};

type CustomAdFeatureOptions = {
  isIntersecting: boolean;
};

type CustomAdFeature = BaseAdFeature & {
  customPicture: (options: CustomAdFeatureOptions) => JSX.Element;
  customDescription: (options: CustomAdFeatureOptions) => JSX.Element;
  title?: never;
  description?: never;
  imageUrl?: never;
};

export type AdFeature = BasicAdFeature | CustomAdFeature;

type Props = {
  intersectingEntries?: Record<string, boolean>;
  feature: AdFeature & { ref: React.RefObject<HTMLDivElement> };
};
export const FeatureItem: React.FC<Props> = ({
  intersectingEntries,
  feature,
}) => {
  const isIntersecting = !!intersectingEntries?.[feature.id];

  return (
    <div
      id="feature-item"
      className="fsr-flex lg:fsr-gap-32 lg:fsr-flex-row fsr-flex-col fsr-group last:lg:fsr-h-auto fsr-relative fsr-isolate"
      data-feature-id={feature.id}
      ref={feature.ref}
    >
      {/* Mobile Line follower */}
      <div
        className={`${
          isIntersecting ? "fsr-h-full" : "fsr-h-0"
        } fsr-w-[2px] fsr-translate-x-[-0.5px] fsr-z-10 fsr-absolute fsr-top-0 fsr-bg-blue-600 fsr-left-0 fsr-block lg:fsr-hidden fsr-transition fsr-origin-top fsr-transform fsr-duration-700`}
      ></div>
      {/* Bullet background */}
      <div className="fsr-w-4 fsr-h-7 fsr-z-10 fsr-bg-white fsr-scale-y-150 fsr-absolute fsr-left-0 lg:fsr-left-[50%] -fsr-translate-x-2 fsr-translate-y-[-0.4375rem]"></div>
      {/* Bullet point */}
      <div
        className={`${
          isIntersecting
            ? " fsr-ring-blue-500 fsr-ring  fsr-bg-blue-500"
            : " fsr-bg-gray-300"
        } fsr-transition fsr-duration-300 fsr-w-4 fsr-h-4 fsr-z-10 -fsr-translate-x-2 fsr-absolute fsr-left-0 lg:fsr-left-[50%] fsr-rounded-full fsr-border-2 fsr-border-white`}
      ></div>

      {/* Image */}
      <div className="fsr-flex-1 fsr-w-full fsr-order-2 lg:fsr-order-1">
        <div
          className={`
          fsr-transition fsr-duration-300 lg:-fsr-mb-96 fsr-sticky fsr-top-64 group-last:fsr-mb-0 fsr-z-20 fsr-ml-6 lg:fsr-ml-0 fsr-mb-16
          ${
            isIntersecting
              ? "fsr-opacity-100 fsr-scale-100"
              : "lg:fsr-opacity-0 lg:fsr-scale-50"
          }  
          ${
            !feature.customPicture &&
            "fsr-bg-gray-50 fsr-border fsr-border-gray-200 fsr-p-8 fsr-rounded-md fsr-flex fsr-justify-center fsr-items-start"
          }
          `}
        >
          {feature.customPicture ? (
            feature.customPicture({ isIntersecting })
          ) : (
            <img
              className="fsr-w-48 fsr-object-contain lg:fsr-w-64"
              src={feature.imageUrl}
            />
          )}
        </div>
      </div>
      {/* Info */}
      <div className="fsr-flex-1 fsr-w-full fsr-self-stretch fsr-order-1 lg:fsr-order-2 fsr-text-left">
        <div className="fsr-h-full">
          <div className="fsr-flex-1 fsr-h-full fsr-ml-6 lg:fsr-pl-0">
            {feature.customDescription ? (
              feature.customDescription({ isIntersecting })
            ) : (
              <>
                {/* Title */}
                <h4
                  className={`${
                    isIntersecting ? "fsr-text-blue-600" : "fsr-text-gray-300"
                  } fsr-transition fsr-duration-300 fsr-text-2xl lg:fsr-text-3xl -fsr-mt-3`}
                  ref={feature.ref}
                  id={feature.id}
                >
                  {feature.title}
                </h4>
                {/* Description */}
                <p
                  className={`${
                    isIntersecting ? "fsr-text-gray-600" : "fsr-text-gray-300"
                  } fsr-transition fsr-duration-300 fsr-mt-4`}
                >
                  {feature.description}
                </p>
                {/* Link */}
                <button
                  className={`${
                    isIntersecting ? "fsr-text-blue-600" : "fsr-text-gray-300"
                  } fsr-text-md fsr-font-medium fsr-mt-4 fsr-mb-8 lg:fsr-mb-32 lg:group-last:fsr-mb-0 fsr-transition fsr-duration-300`}
                >
                  Learn more
                  <span className="fsr-ml-1">&gt;</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
