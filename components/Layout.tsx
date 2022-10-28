import Image from "next/image";
import profile from "../public/Image/profile1.jpeg";
const LayoutComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-primary pt-2 md:py-16">
      <div className="w-full flex flex-col lg:flex-row justify-center items-start md:items-center md:justify-between md:px-[132px] lg:w-[976px] xl:w-[1250px]">
        <div className="w-[436px] h-[89px]">
          <div className="rounded-full border-2 border-pteal w-[50px] h-[50px] top-2 overflow-hidden relative">
            <Image src={profile} alt="profile picture" width="50" height="50" />
          </div>
          <h1 className="font-serif font-bold text-[48px] w-[361px] h-[51px] top-[-55px] left-[55px] relative">
            Bertan Akarsu
          </h1>
          <p className="font-serif tracking-wide text-[16px] w-[255px] h-[27px] top-[-53px] left-[57px] relative">
            Front-End Developer
          </p>
        </div>
        <div className="flex justify-center items-center md:space-x-3">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.0002 27.0837L8.3335 16.667V37.5003H41.6668V16.667L25.0002 27.0837Z"
              fill="black"
              fillOpacity="0.3"
            />
            <path
              d="M41.6667 10.417H8.33333C7.18274 10.417 6.25 11.3497 6.25 12.5003V37.5003C6.25 38.6509 7.18274 39.5837 8.33333 39.5837H41.6667C42.8173 39.5837 43.75 38.6509 43.75 37.5003V12.5003C43.75 11.3497 42.8173 10.417 41.6667 10.417Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M6.25 13.542L25 25.0003L43.75 13.542"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <svg
            width="53"
            height="53"
            viewBox="0 0 53 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M48.1484 1.14844H4.14844C2.49158 1.14844 1.14844 2.49039 1.14844 4.14577V48.1067C1.14844 49.7621 2.49158 51.104 4.14844 51.104H48.1484C49.8053 51.104 51.1484 49.7621 51.1484 48.1067V4.14577C51.1484 2.49039 49.8053 1.14844 48.1484 1.14844Z"
              fill="#61B2E4"
            />
            <path
              d="M10.1484 20.1309H16.1484V41.1122H10.1484V20.1309Z"
              fill="white"
            />
            <path
              d="M13.1484 15.6354C15.0814 15.6354 16.6484 14.0698 16.6484 12.1385C16.6484 10.2072 15.0814 8.6416 13.1484 8.6416C11.2154 8.6416 9.64844 10.2072 9.64844 12.1385C9.64844 14.0698 11.2154 15.6354 13.1484 15.6354Z"
              fill="white"
            />
            <path
              d="M32.6484 25.127C30.4394 25.127 28.6484 26.2939 28.6484 29.623V41.1127H22.6484V20.1314H28.6484V22.3394H28.6464C29.3965 21.4875 30.3199 20.8052 31.3549 20.3383C32.3899 19.8714 33.5128 19.6305 34.6484 19.6318C39.0664 19.6318 42.6484 22.9289 42.6484 28.6238V41.1127H36.6484V29.623C36.6484 26.2939 34.8584 25.127 32.6484 25.127Z"
              fill="white"
            />
            <path
              d="M48.2973 1.27939L4.29827 1.01783C2.64145 1.00798 1.29033 2.34194 1.28046 3.9973L1.01821 47.9577C1.00833 49.613 2.34344 50.963 4.00026 50.9728L47.9992 51.2344C49.6561 51.2442 51.0072 49.9103 51.0171 48.2549L51.2793 4.29452C51.2892 2.63916 49.9541 1.28924 48.2973 1.27939Z"
              stroke="black"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
            <path
              d="M10.1846 20.0361L16.1844 20.0718L16.0592 41.0528L10.0594 41.0171L10.1846 20.0361Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.2111 15.5584C15.1441 15.5699 16.7204 14.0137 16.7319 12.0824C16.7434 10.1511 15.1858 8.57624 13.2528 8.56475C11.3199 8.55326 9.74359 10.1095 9.73207 12.0408C9.72055 13.972 11.2782 15.547 13.2111 15.5584Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M32.6545 25.1658C30.4455 25.1527 28.6476 26.309 28.6278 29.638L28.5592 41.1276L22.5594 41.092L22.6845 20.1109L28.6844 20.1465L28.6712 22.3546L28.6692 22.3545C29.4243 21.507 30.3517 20.8303 31.3895 20.3695C32.4273 19.9088 33.5516 19.6746 34.6872 19.6827C39.1051 19.7089 42.6674 23.0273 42.6334 28.7221L42.5589 41.2109L36.559 41.1752L36.6276 29.6855C36.6474 26.3565 34.8644 25.179 32.6545 25.1658Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.1696 42.7853C20.1696 42.1416 20.1453 40.0214 20.1453 37.3936C20.1453 35.5554 20.7522 34.3568 21.439 33.7457C17.1147 33.245 12.5647 31.5561 12.5647 23.9999C12.5647 21.8485 13.3258 20.0888 14.5696 18.7117C14.371 18.2117 13.6994 16.2075 14.7626 13.4936C14.7626 13.4936 16.398 12.9631 20.121 15.5131C23.3147 14.6332 26.6869 14.6332 29.8807 15.5131C33.6008 12.9631 35.2355 13.4936 35.2355 13.4936C36.2994 16.2075 35.6314 18.2124 35.4286 18.7117C36.6758 20.0888 37.43 21.8464 37.43 23.9999C37.43 31.5728 32.8744 33.2409 28.5293 33.7277C29.2328 34.3402 29.855 35.5409 29.855 37.3825C29.855 40.0159 29.8307 42.1395 29.8307 42.7853C29.8307 43.3145 30.1814 43.9249 31.171 43.736C38.9105 41.1263 44.4883 33.7388 44.4883 25.0332C44.4883 14.1457 35.7612 5.31934 24.9973 5.31934C14.2376 5.31934 5.51123 14.1436 5.51123 25.0332C5.51123 33.7423 11.0946 41.1318 18.846 43.7374C19.8147 43.9193 20.1696 43.311 20.1696 42.786V42.7853Z"
              fill="#D0CFCE"
            />
            <path
              d="M20.1696 42.7853C20.1696 42.1416 20.1453 40.0214 20.1453 37.3936C20.1453 35.5554 20.7522 34.3568 21.439 33.7457C17.1147 33.245 12.5647 31.5561 12.5647 23.9999C12.5647 21.8485 13.3258 20.0888 14.5696 18.7117C14.371 18.2117 13.6994 16.2075 14.7626 13.4936C14.7626 13.4936 16.398 12.9631 20.121 15.5131C23.3147 14.6332 26.6869 14.6332 29.8807 15.5131C33.6008 12.9631 35.2355 13.4936 35.2355 13.4936C36.2994 16.2075 35.6314 18.2124 35.4286 18.7117C36.6758 20.0888 37.43 21.8464 37.43 23.9999C37.43 31.5728 32.8744 33.2409 28.5293 33.7277C29.2328 34.3402 29.855 35.5409 29.855 37.3825C29.855 40.0159 29.8307 42.1395 29.8307 42.7853C29.8307 43.3145 30.1814 43.9249 31.171 43.736C38.9105 41.1263 44.4883 33.7388 44.4883 25.0332C44.4883 14.1457 35.7612 5.31934 24.9973 5.31934C14.2376 5.31934 5.51123 14.1436 5.51123 25.0332C5.51123 33.7423 11.0946 41.1318 18.846 43.7374C19.8147 43.9193 20.1696 43.311 20.1696 42.786V42.7853Z"
              stroke="black"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.3125 33.3955C13.0958 33.9372 13.7986 34.5309 14.6382 35.9379C15.475 37.3448 16.4576 38.915 20.1472 38.0205"
              stroke="black"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="hidden md:flex justify-between items-center pt-32 md:w-[600px] xl:w-[976px] ">
        <div className="flex justify-center items-center  hover:border-b-2 transition-all duration-200 cursor-pointer">
          <h1>About Me</h1>
        </div>
        <div className="flex justify-center items-center  hover:border-b-2 transition-all duration-200 cursor-pointer">
          <h1>Section</h1>
        </div>
        <div className="flex justify-center items-center  hover:border-b-2 transition-all duration-200 cursor-pointer">
          <h1>software languages</h1>
        </div>
        <div className="flex justify-center items-center  hover:border-b-2 transition-all duration-200 cursor-pointer">
          <h1>software languages</h1>
        </div>
      </div>
    </div>
  );
};
export default LayoutComponent;
