import { LogoProps } from "~/types";

const Abate = ({ className, fill = "black" }: LogoProps) => {
  return (
    <svg
      viewBox="0 0 157 77"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M95.2345 53.2392C92.9099 53.4086 92.2914 52.2035 92.2914 50.1249C92.2914 46.4408 96.4476 39.2618 97.7702 37.1836C98.4314 36.1443 98.5258 35.7666 98.5258 35.483C98.5258 34.444 97.5813 33.5939 96.6364 33.5939C96.0699 33.5939 95.3141 33.8772 94.9362 34.5384C87.3792 47.7633 80.1054 52.4864 76.7993 52.4864C75.1935 52.4864 73.4932 51.2586 73.4932 46.8191C73.4932 38.5058 82.3728 30.0986 90.8743 30.0986C93.3303 30.0986 95.7862 30.8543 98.0533 32.5549C98.4313 32.8382 98.809 32.9326 99.187 32.9326C100.226 32.9326 101.076 31.9881 101.076 31.0435C101.076 30.4766 100.887 30.0042 100.32 29.5321C97.392 27.2649 94.1804 26.3201 90.8743 26.3201C89.0111 26.3201 87.1427 26.6363 85.3289 27.2121C84.0485 27.6185 82.7138 27.8176 81.3721 27.8841C73.3387 28.282 63.2824 28.8708 55.3561 28.8708C53.9391 28.8708 53.1834 29.6265 53.1834 30.5711C53.1834 31.1379 53.5614 31.7992 54.3171 32.3657C57.0567 34.1607 58.3789 37.1835 58.3789 40.7732C58.3789 47.9522 53.3725 54.9426 47.7046 54.9426C45.4375 54.9426 42.3203 53.4312 42.3203 48.3305C42.3203 45.9684 43.076 42.2846 44.3986 38.1281C52.2389 29.0597 65.4637 12.0566 65.4637 4.31042C65.4637 2.32692 64.4244 0.4375 62.2518 0.4375C61.8741 0.4375 61.4017 0.531952 61.1184 0.626342C54.0338 3.27144 45.7208 22.164 41.4702 35.6721L40.1624 40.3038C40.1261 40.3354 40.0868 40.3604 40.052 40.3952L38.5406 41.9066C37.4072 43.04 32.6839 48.1411 29.2833 50.5026C28.244 51.2586 27.2995 51.731 26.6382 51.731C25.7881 51.731 25.316 50.975 25.316 48.8971C25.316 43.2292 29.2833 35.861 29.9446 34.9165L31.6448 32.4602C31.9281 32.0825 32.0225 31.7992 32.0225 31.4212C32.0225 30.3822 31.1724 29.5321 30.1334 29.5321C29.661 29.5321 28.9997 29.721 28.622 30.2878L26.3549 33.4994C24.6546 30.7599 22.104 28.7764 18.5143 28.7764C8.59597 28.7764 0 40.6785 0 50.1249C0 53.5254 1.32258 58.1543 6.14002 58.1543C10.7686 58.1543 16.8143 52.1087 22.0098 45.4966C21.6321 46.8192 21.5373 47.8582 21.5373 48.8971C21.5373 51.9199 22.9543 55.4152 26.7328 55.4152C30.3009 55.4152 35.2143 50.7014 38.6207 47.1992C38.5719 47.6251 38.542 48.008 38.542 48.3306C38.542 55.6981 43.4542 58.7209 47.7048 58.7209C56.4899 58.7209 62.1575 48.8024 62.1575 40.7732C62.1575 37.9393 61.4962 35.0109 59.8904 32.6494C65.627 32.5158 71.5491 32.3816 76.9306 32.0819C72.6409 35.9297 69.7148 41.2824 69.7148 46.8192C69.7148 51.9199 71.8875 56.2653 76.7994 56.2653C80.2002 56.2653 84.8289 53.3366 88.513 49.2748C88.4185 50.0308 88.3238 50.6921 88.3238 51.3534C88.3238 54.6592 90.0244 56.8318 94.3694 56.8318C100.64 56.8318 105.515 51.947 109.826 47.428C109.788 47.8678 109.769 48.2951 109.769 48.7082C109.769 54.3761 113.453 57.399 117.326 57.399C121.405 57.399 125.806 55.2404 134.48 46.9051C135.236 53.3283 138.914 56.5482 143.87 56.5482C148.12 56.5482 152.844 54.0926 156.433 50.7862C156.896 50.3237 156.996 49.8618 157 49.3993C157.004 48.9287 156.866 48.4639 156.566 48.1013C155.82 47.1997 154.591 47.1501 153.788 47.9522C150.671 50.975 146.798 52.77 143.87 52.77C140.941 52.77 138.202 51.0697 138.108 44.3629C144.531 43.1347 156.906 38.6005 156.906 31.7048C156.906 27.926 153.505 25.7536 149.915 25.7536C142.137 25.7536 135.917 34.1215 134.594 41.5473L134.234 41.9067C123.844 52.2976 120.065 53.6202 117.326 53.6202C115.625 53.6202 113.547 52.4865 113.547 48.7083C113.547 46.4409 114.397 43.1348 116.759 38.695L120.726 31.2324H131.023C132.251 31.2324 132.912 30.2879 132.912 29.343C132.912 28.3981 132.251 27.4539 131.023 27.4539H122.804L132.628 9.12823C132.818 8.84463 132.818 8.46694 132.818 8.1834C132.818 7.14442 131.873 6.38874 130.834 6.38874C130.267 6.38874 129.606 6.67204 129.228 7.42772L118.459 27.4539H113.358C112.13 27.4539 111.469 28.3984 111.469 29.343C111.469 30.2876 112.13 31.2324 113.358 31.2324H116.475C116.475 31.2324 113.654 36.6925 106.807 45.0339C101.544 51.4447 98.9245 52.9703 95.2346 53.2392L95.2345 53.2392ZM61.591 4.68841C61.1186 9.78915 54.6005 19.4244 48.2717 27.4538C52.239 17.913 57.4345 8.37249 61.591 4.68841ZM6.14002 54.3761C4.91189 54.3761 3.77847 53.3365 3.77847 50.1249C3.77847 42.0011 11.3355 32.555 18.5145 32.555C21.3484 32.555 22.9542 34.6329 23.8991 36.9944C18.3256 44.7406 10.4853 54.3761 6.14002 54.3761ZM149.915 29.5321C152.277 29.5321 153.127 30.7599 153.127 31.7048C153.127 35.483 144.059 38.9782 138.863 40.3007C140.469 35.1052 144.814 29.5321 149.915 29.5321L149.915 29.5321Z"
        fill={fill}
      />
      <path
        d="M7.01975 68.1406V76.303H6.06348L1.16607 70.2163V76.303H6.10352e-05V68.1406H0.956026L5.85343 74.2274V68.1406H7.01975Z"
        fill={fill}
      />
      <path
        d="M18.8915 75.2886V76.303H12.9679V68.1406H18.7281V69.155H14.1339V71.6623H18.2266V72.6534H14.1339V75.2887H18.8915V75.2886Z"
        fill={fill}
      />
      <path
        d="M35.6953 68.1406L32.9669 76.303H31.7425L29.5155 69.7847L27.2882 76.303H26.0404L23.312 68.1406H24.5131L26.7168 74.7754L29.014 68.1406H30.0868L32.3372 74.8105L34.5878 68.1406H35.6954H35.6953Z"
        fill={fill}
      />
      <path
        d="M39.8712 75.3707L40.3024 74.461C40.9089 75.0091 41.9466 75.4056 42.9961 75.4056C44.4069 75.4056 45.0134 74.8575 45.0134 74.1463C45.0134 72.1523 40.0694 73.4116 40.0694 70.3799C40.0694 69.1207 41.0487 68.0479 43.1943 68.0479C44.1506 68.0479 45.1417 68.3045 45.8181 68.7708L45.4331 69.7035C44.722 69.249 43.9173 69.0389 43.1943 69.0389C41.8068 69.0389 41.2121 69.6221 41.2121 70.3333C41.2121 72.3273 46.1561 71.0796 46.1561 74.0764C46.1561 75.3238 45.1532 76.3967 42.9961 76.3967C41.7484 76.3967 40.5242 75.9769 39.8712 75.3707Z"
        fill={fill}
      />
      <path
        d="M57.2471 75.3707L57.6783 74.461C58.2847 75.0091 59.3225 75.4056 60.372 75.4056C61.7828 75.4056 62.3893 74.8575 62.3893 74.1463C62.3893 72.1523 57.4453 73.4116 57.4453 70.3799C57.4453 69.1207 58.4246 68.0479 60.5702 68.0479C61.5265 68.0479 62.5176 68.3045 63.194 68.7708L62.809 69.7035C62.0978 69.249 61.2932 69.0389 60.5702 69.0389C59.1826 69.0389 58.588 69.6221 58.588 70.3333C58.588 72.3273 63.532 71.0796 63.532 74.0764C63.532 75.3238 62.5291 76.3967 60.372 76.3967C59.1242 76.3967 57.9001 75.9769 57.2471 75.3707Z"
        fill={fill}
      />
      <path d="M68.7335 68.1406H69.8995V76.303H68.7335V68.1406Z" fill={fill} />
      <path
        d="M83.4152 76.303L83.4034 70.3561L80.4534 75.3119H79.9168L76.9668 70.3913V76.303H75.8474V68.1406H76.8034L80.2082 73.8778L83.5665 68.1406H84.5227L84.5345 76.303H83.4151H83.4152Z"
        fill={fill}
      />
      <path
        d="M97.0708 70.9858C97.0708 72.758 95.7879 73.8308 93.6659 73.8308H91.6486V76.303H90.4826V68.1406H93.6659C95.788 68.1406 97.0708 69.2134 97.0708 70.9859V70.9858ZM95.9048 70.9858C95.9048 69.8198 95.1234 69.1549 93.6308 69.1549H91.6486V72.8164H93.6308C95.1233 72.8164 95.9048 72.1518 95.9048 70.9858V70.9858Z"
        fill={fill}
      />
      <path
        d="M102.284 68.1406H103.45V75.2887H107.869V76.3031H102.284V68.1407V68.1406Z"
        fill={fill}
      />
      <path d="M112.709 68.1406H113.875V76.303H112.709V68.1406Z" fill={fill} />
      <path
        d="M120.989 69.155V72.0003H125.082V73.0032H120.989V76.303H119.823V68.1406H125.583V69.155H120.989Z"
        fill={fill}
      />
      <path d="M130.727 68.1406H131.893V76.303H130.727V68.1406Z" fill={fill} />
      <path
        d="M143.764 75.2886V76.303H137.841V68.1406H143.601V69.155H139.007V71.6623H143.099V72.6534H139.007V75.2887H143.764V75.2886Z"
        fill={fill}
      />
      <path
        d="M149.152 68.1406H152.592C155.216 68.1406 157 69.7966 157 72.2218C157 74.6471 155.216 76.3031 152.592 76.3031H149.152V68.1407V68.1406ZM152.522 75.2887C154.539 75.2887 155.834 74.0524 155.834 72.2218C155.834 70.3913 154.539 69.155 152.522 69.155H150.318V75.2887H152.522Z"
        fill={fill}
      />
    </svg>
  );
};

export { Abate };
