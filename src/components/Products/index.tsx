import { Center, Heading } from "@chakra-ui/react";
import {
  SfLink,
  SfButton,
  SfIconFavorite,
  SfIconChevronLeft,
  SfIconChevronRight,
  SfScrollable,
} from "@storefront-ui/react";
import classNames from "classnames";

const products = [
  {
    id: 0,
    name: "Tenis 1",
    price: "$2,345.99",
    img: {
      src: "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/sneakers.png",
      alt: "White sneaker shoe",
    },
  },
  {
    id: 1,
    name: "Tenis dois",
    price: "$2,345.99",
    img: {
      src: "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/sneakers.png",
      alt: "White sneaker shoe",
    },
  },
  {
    id: 2,
    name: "Tenis tres",
    price: "$2,345.99",
    img: {
      src: "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/sneakers.png",
      alt: "White sneaker shoe",
    },
  },
  {
    id: 3,
    name: "Tenis quatro",
    price: "$2,345.99",
    img: {
      src: "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/sneakers.png",
      alt: "White sneaker shoe",
    },
  },
  {
    id: 4,
    name: "Tenis cinco",
    price: "$2,345.99",
    img: {
      src: "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/sneakers.png",
      alt: "White sneaker shoe",
    },
  },
];

function ButtonPrev({ disabled, ...attributes }: { disabled?: boolean }) {
  return (
    <SfButton
      className={classNames("absolute z-10 bg-white hidden md:block", {
        "!hidden": disabled,
      })}
      variant="tertiary"
      size="base"
      square
      {...attributes}
    >
      <SfIconChevronLeft />
    </SfButton>
  );
}

ButtonPrev.defaultProps = { disabled: false };

function ButtonNext({ disabled, ...attributes }: { disabled?: boolean }) {
  return (
    <SfButton
      className={classNames("absolute z-10 right-0 bg-white hidden md:block", {
        "!hidden": disabled,
      })}
      variant="tertiary"
      size="lg"
      square
      {...attributes}
    >
      <SfIconChevronRight />
    </SfButton>
  );
}

ButtonNext.defaultProps = { disabled: false };

export default function Products() {
  return (
    <>
      <div className="flex flex-col my-5 w-full items-center">
        <Heading>Nossos produtos</Heading>
        <p>Veja nossos produtos</p>
      </div>
      <SfScrollable
        className="m-auto py-4 items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        buttons-placement="floating"
        drag
        slotPreviousButton={<ButtonPrev />}
        slotNextButton={<ButtonNext />}
      >
        {products.map(({ id, name, price, img }) => (
          <div
            key={id}
            className="first:ms-auto last:me-auto ring-1 ring-inset ring-yellow-300 shrink-0 rounded-md hover:shadow-lg w-[148px] lg:w-[192px]"
          >
            <div className="relative">
              <SfLink href="#" className="block">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="block object-cover h-auto rounded-md aspect-square lg:w-[190px] lg:h-[190px]"
                  width="146"
                  height="146"
                />
              </SfLink>
            </div>
            <div className="p-2 border-t border-neutral-200 typography-text-sm">
              <SfLink href="#" variant="secondary" className="no-underline">
                {name}
              </SfLink>
              <span className="block mt-2 font-bold">{price}</span>
            </div>
          </div>
        ))}
      </SfScrollable>
    </>
  );
}
