import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Sidebar.scss';

export default function Sidebar() {
  const [show, setShow] = useState(false);
  const changeSidebar = () => {
    setShow(!show);
  };
  return (
    <aside className="sidebar">
      <div className="sidebar-menu-item sidebar-menu-item-more" title="More">
        <svg
          width="62"
          height="62"
          viewBox="0 0 62 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: `${show ? 'rotateX(180deg)' : 'none'}` }}
        >
          <circle cx="31" cy="31" r="30.5" transform="rotate(90 31 31)" stroke="black" />
          <path
            d="M35.1075 34.9982L35.2094 34.8935L35.1074 34.7889L34.9709 34.6487L34.8635 34.5384L34.756 34.6487L31.2466 38.2516V23V22.85H31.0966H30.9034H30.7534V23V38.2512L27.244 34.6487L27.1365 34.5384L27.0291 34.6487L26.8926 34.7889L26.7906 34.8935L26.8926 34.9982L30.8927 39.1047L31.0002 39.215L31.1076 39.1047L35.1075 34.9982Z"
            fill="black"
            stroke="black"
            strokeWidth="0.3"
          />
        </svg>
      </div>
      <input type="checkbox" onChange={() => changeSidebar()} />

      <ul className="sidebar-menu">
        <li className="sidebar-menu-item" title="Gorillas">
          <NavLink to="/gorilla">
            <svg
              width="55"
              height="47"
              viewBox="0 0 55 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.2709 12.0862C29.2709 12.0862 31.6454 9.79615 33.7743 9.03281C33.7743 9.03281 28.7796 2.2264 18.2169 0C18.2169 0 14.6141 2.16279 13.959 6.42475C13.959 6.42475 11.1751 6.99725 11.1751 8.46031L14.5322 9.73254C14.5322 9.73254 20.919 8.77837 21.7378 8.9692C22.5566 9.16004 21.9834 11.45 21.2465 11.8317C21.2465 11.8317 21.4921 12.595 21.9834 12.9131C21.9834 12.9131 20.3458 15.5212 16.088 14.1217C16.088 14.1217 18.4625 18.0656 12.4852 19.0834C12.4852 19.0834 9.04615 18.3201 8.55487 14.7578C8.55487 14.7578 12.5671 15.0123 12.9765 15.4576C12.9765 15.4576 13.8772 14.9487 10.6019 14.5034C10.6019 14.5034 10.1106 14.1217 11.912 12.9131L10.6838 12.8495L10.3563 10.1778C10.3563 10.1778 2.82317 11.5137 0.939896 16.0301C0.939896 16.0301 -3.23606 25.3809 6.01654 45.6094C6.01654 45.6094 12.1576 46.5635 16.2517 45.4185C16.2517 45.4185 16.4974 42.4924 15.9242 42.1107L13.2221 40.9021C13.2221 40.9021 18.5444 33.6504 16.9068 32.3146C16.9068 32.3146 15.351 31.1696 14.9416 30.4698C14.9416 30.4698 17.2343 31.3604 18.135 31.3604C18.135 31.3604 19.1995 28.0526 21.2465 25.699C21.2465 25.699 16.3336 41.6018 18.3806 45.991C18.3806 45.991 32.1367 49.0444 31.3998 44.528C31.3998 44.528 31.4817 42.8741 29.3528 41.4746C29.3528 41.4746 33.1193 38.1668 33.2831 37.7215C33.2831 37.7215 36.3946 36.3857 34.1019 30.9151C31.8092 25.4445 34.02 30.7879 34.02 30.7879C34.02 30.7879 49.6593 19.6559 39.5879 10.8775C39.5879 10.8775 35.5757 7.18808 29.2709 12.0862Z"
                fill="black"
              />
              <path
                d="M20.625 10.0511H18.4499H12.6777L11.1719 9.40002C11.1719 9.40002 11.8411 11.6788 12.1757 11.8416C12.1757 11.8416 14.0162 11.923 15.02 11.2719C15.02 11.2719 16.9441 12.7368 17.5297 12.8182C17.5297 12.8182 20.374 11.5974 20.625 10.0511Z"
                fill="black"
              />
              <path
                d="M14.5602 11.9636L13.8788 13.0512C13.8788 13.0512 13.3109 13.6727 14.5602 13.6727H15.4688V12.2744C15.4688 12.2744 15.0145 11.9636 14.7873 11.9636"
                fill="black"
              />
              <path
                d="M13.75 11.9636L13.0134 12.8182L12.0312 12.7114C12.0312 12.7114 12.7679 12.017 13.75 11.9636Z"
                fill="black"
              />
              <path
                d="M43.4148 22.248C43.4148 22.248 39.7543 28.1715 36.0938 30.6825L36.6632 34.4169C36.6632 34.4169 38.5341 34.0306 38.6968 34.1593C38.8595 34.2881 43.9029 42.1431 43.8215 42.5938C43.8215 42.5938 42.1133 43.1733 42.1133 43.624L41.9506 44.9761C41.9506 44.9761 50.9799 45.6843 53.583 44.9761C53.583 44.9761 56.3487 42.5294 54.1524 37.2498C54.1524 37.2498 50.2478 33.773 50.1665 32.6141C50.1665 32.6141 49.4344 30.6181 50.6545 28.1715C50.7359 28.0427 52.6068 21.733 43.4148 22.248Z"
                fill="black"
              />
              <path
                d="M36.2801 36.026C36.2801 36.026 36.3677 38.0685 30.9375 41.3726C30.9375 41.3726 33.3898 43.7154 32.8643 44.4363L35.3167 44.196C35.3167 44.196 36.9808 40.5916 36.9808 40.2312C36.9808 40.2312 35.7546 39.4502 35.5794 39.0297C35.5794 39.0297 39.9586 37.2275 38.2945 36.026C37.8566 35.8458 36.2801 35.8458 36.2801 36.026Z"
                fill="black"
              />
            </svg>
          </NavLink>
        </li>
        <li className="sidebar-menu-item" title="Alligators">
          <NavLink to="/alligator">
            <svg
              width="64"
              height="30"
              viewBox="0 0 64 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.6001 18.4318C19.434 18.1912 19.2528 17.9248 19.1235 17.7299C19.1131 17.7144 19.1002 17.7016 19.0856 17.6921C19.071 17.6827 19.055 17.6769 19.0385 17.6751C18.3946 17.599 16.8228 17.4087 15.7251 17.2762C15.7079 17.2743 15.6906 17.2767 15.6742 17.2831C15.6578 17.2895 15.6427 17.2999 15.6298 17.3136C15.6169 17.3272 15.6064 17.3439 15.599 17.3627C15.5916 17.3814 15.5875 17.4017 15.5869 17.4224C15.5768 17.7451 15.5844 18.0862 15.5958 18.2872C15.177 18.6739 14.8039 19.1272 14.4866 19.6346C14.3759 19.8029 14.3069 20.0052 14.2875 20.2183C14.2681 20.4315 14.299 20.647 14.3768 20.84C14.4546 21.033 14.576 21.1959 14.7273 21.3098C14.8785 21.4238 15.0534 21.4843 15.232 21.4845H17.2208C17.3805 21.4846 17.5381 21.442 17.6824 21.3598C17.8267 21.2777 17.9539 21.158 18.0549 21.0094L19.6026 18.6236C19.6204 18.5961 19.6298 18.562 19.6294 18.5272C19.6289 18.4923 19.6186 18.4587 19.6001 18.4318ZM61.589 10.6608C59.8892 8.76219 57.3109 7.06608 53.7046 5.47199C46.8672 2.45129 30.6497 0.10354 29.9626 0.00457493C29.894 -0.00484589 29.8245 0.000308609 29.7573 0.0198012L24.1305 1.70981H15.8898C14.2889 1.70981 11.594 2.43758 10.8575 4.3712C8.80528 5.68819 6.37024 7.27924 5.7301 7.69793C5.06969 7.61572 2.90464 7.46194 1.00199 8.63582C0.684101 8.83186 0.420471 9.1346 0.24314 9.50723C0.0658092 9.87987 -0.0175858 10.3063 0.00309104 10.7348C0.0237679 11.1633 0.147626 11.5754 0.359612 11.9209C0.571597 12.2664 0.862581 12.5306 1.1972 12.6812C1.21044 12.6877 1.22399 12.6933 1.23776 12.6979C1.46212 12.7756 6.74671 14.6163 8.63542 14.9178C9.18809 15.0061 9.78639 15.1081 10.4354 15.2177C11.5864 15.4126 12.8679 15.6288 14.3028 15.8435C14.3025 15.8435 14.3022 15.8433 14.3019 15.843C14.3017 15.8428 14.3016 15.8424 14.3016 15.842L19.6495 16.5027C19.6495 16.5027 20.7904 18.2597 20.9653 18.4912C20.6666 18.9107 20.4292 19.3879 20.263 19.9026C20.2027 20.0761 20.179 20.2648 20.194 20.452C20.209 20.6392 20.2623 20.819 20.3491 20.9756C20.4358 21.1321 20.5535 21.2604 20.6915 21.3492C20.8295 21.438 20.9836 21.4845 21.1402 21.4845H23.2038C23.3655 21.485 23.5252 21.4415 23.671 21.3574C23.8167 21.2733 23.9448 21.1507 24.0455 20.9988L25.573 18.7089C25.7179 18.4918 25.8006 18.2242 25.8087 17.9461C25.8143 17.7424 25.815 17.4466 25.7961 17.074C25.7951 17.0531 25.7977 17.0322 25.8038 17.0125C25.8098 16.9929 25.8192 16.975 25.8313 16.9599C25.8434 16.9448 25.8579 16.9329 25.874 16.9248C25.8901 16.9168 25.9074 16.9129 25.9249 16.9132C27.3984 16.9495 33.1107 16.9239 35.0524 16.8371C35.082 16.8356 35.1112 16.8467 35.1347 16.8683C35.1583 16.89 35.1748 16.9209 35.1813 16.9557C35.2499 17.2859 35.2681 17.6283 35.2351 17.9664C34.6149 18.3918 34.0878 18.9883 33.6975 19.7066C33.6014 19.8785 33.5461 20.0785 33.5373 20.2853C33.5286 20.4921 33.5669 20.6978 33.648 20.8804C33.7291 21.0631 33.85 21.2158 33.9979 21.3223C34.1457 21.4288 34.3148 21.485 34.4872 21.4849H37.3273C37.5215 21.4851 37.7121 21.422 37.8787 21.3022C38.3731 20.7998 39.6354 19.5297 39.8763 19.2872C39.9029 19.2602 39.9245 19.2269 39.9397 19.1894L41.2265 16.0627L41.4483 16.0384C41.821 15.9973 42.5122 15.9275 43.3902 15.8953C46.2385 15.7907 51.6144 14.9589 53.5956 14.5874C54.4031 14.4351 55.6618 15.0868 56.345 16.0094C56.5542 16.2926 56.8875 16.8499 56.7621 17.3949C56.3006 19.3864 54.1876 21.2393 50.812 22.6142C46.6441 24.3118 33.6196 24.8934 28.2134 25.0639C27.9056 25.0739 27.6102 25.2113 27.3771 25.4529C27.144 25.6944 26.9876 26.0254 26.9344 26.3896C26.8811 26.7538 26.9343 27.1289 27.0849 27.4514C27.2355 27.7739 27.4743 28.024 27.7608 28.1593C30.0729 29.2494 34.062 30 39.1096 30C43.3497 30 48.3376 29.4702 53.7034 28.1669C60.7778 26.4495 64 20.9805 64 16.6261C64 14.4549 63.1887 12.4482 61.589 10.6608ZM12.2595 5.98357C12.3989 5.98357 12.5351 6.03321 12.651 6.12623C12.7669 6.21925 12.8573 6.35146 12.9106 6.50614C12.9639 6.66082 12.9779 6.83103 12.9507 6.99524C12.9235 7.15945 12.8564 7.31029 12.7578 7.42868C12.6593 7.54706 12.5337 7.62769 12.397 7.66035C12.2602 7.69302 12.1185 7.67625 11.9898 7.61218C11.861 7.54811 11.7509 7.43961 11.6735 7.3004C11.596 7.16119 11.5547 6.99752 11.5547 6.83009C11.5547 6.60559 11.629 6.3903 11.7611 6.23155C11.8933 6.0728 12.0726 5.98361 12.2595 5.98357ZM10.5939 13.8611C9.94358 13.75 9.34147 13.648 8.78626 13.5597C7.45783 13.3481 4.20265 12.2792 2.55098 11.722C3.10239 11.7981 3.53083 11.8149 3.54224 11.8149C3.87435 11.8149 4.68814 11.8407 5.62996 11.8712C6.43869 11.8956 7.3336 11.9245 8.17275 11.9458L8.88133 12.9781C8.89822 13.0026 8.91985 13.0218 8.94433 13.034C8.96881 13.0461 8.9954 13.0509 9.02178 13.0479C9.04816 13.0449 9.07352 13.0342 9.09566 13.0167C9.1178 12.9993 9.13604 12.9755 9.1488 12.9476L9.58992 11.9732C9.83329 11.9747 10.0602 11.9763 10.2668 11.9763L10.8448 12.9568C10.8601 12.9828 10.8805 13.004 10.9041 13.0184C10.9278 13.0328 10.954 13.04 10.9805 13.0394C11.0071 13.0388 11.0331 13.0304 11.0562 13.0149C11.0794 12.9995 11.0991 12.9774 11.1136 12.9507L11.6713 11.9093C13.8135 11.7326 17.2474 11.4647 19.1526 15.0792C15.6655 14.7199 12.8742 14.2479 10.5939 13.8611ZM40.5483 20.0594C40.507 20.2538 40.509 20.458 40.5543 20.6512C40.5996 20.8444 40.6864 21.0198 40.8061 21.1599C40.9935 21.3732 41.2431 21.4897 41.5013 21.4845H44.2205C44.3822 21.4851 44.542 21.4418 44.6877 21.3576C44.8335 21.2735 44.9615 21.1508 45.0622 20.9988L46.7658 18.4409C46.8678 18.2884 46.9396 18.1101 46.9759 17.9194C47.0121 17.7288 47.0118 17.5307 46.975 17.3401L46.925 16.8479C46.9213 16.8092 46.9053 16.7737 46.8803 16.7489C46.8553 16.724 46.8233 16.7117 46.7909 16.7145C45.6398 16.8155 42.5988 17.0142 41.8955 17.0664C41.8644 17.0686 41.8351 17.0845 41.8133 17.111C41.7914 17.1376 41.7785 17.1729 41.777 17.2103C41.76 17.4759 41.7591 17.7427 41.7741 18.0085C41.4675 18.2367 41.2014 18.5353 40.991 18.8873C40.7807 19.2392 40.6302 19.6375 40.5483 20.0594Z"
                fill="black"
              />
            </svg>
          </NavLink>
        </li>
        <li className="sidebar-menu-item" title="Pandas">
          <NavLink to="/panda">
            <svg
              width="58"
              height="42"
              viewBox="0 0 58 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M53.7501 31.5338C56.0937 27.0938 58 21.6492 58 15.8465C58 12.9318 57.0706 9.61843 55.5138 6.98355C54.1526 4.67954 51.6283 1.70282 47.3301 0.605337C41.8905 -0.783412 36.3792 0.511685 31.9507 1.55244C30.3503 1.92853 28.8386 2.28374 27.5437 2.45941C24.64 2.85302 21.5721 2.79536 18.9349 2.69555H18.9331C18.5205 2.6799 18.1174 2.66331 17.7283 2.64725C16.0621 2.57835 12.2248 2.51226 12.2248 2.51226C12.0154 1.64021 11.538 0.925767 10.9421 0.595972C10.6896 0.458575 10.414 0.388928 10.1355 0.392146C9.85694 0.395365 9.58256 0.471365 9.33249 0.614568C8.51285 1.04792 8.11983 2.01081 8.30562 3.09786C6.99233 3.75825 5.70929 5.07275 4.93115 6.10642C4.26304 6.99385 3.69648 8.39504 3.14837 9.75007C2.5903 11.1301 2.01331 12.5571 1.43586 13.1334C1.29451 13.2733 1.1695 13.4342 1.06404 13.6121C1.06221 13.6121 1.06037 13.6109 1.05842 13.6105C0.937676 13.5821 0.813179 13.5835 0.692918 13.6146C0.572657 13.6456 0.459286 13.7057 0.360075 13.7909C0.260865 13.8761 0.178006 13.9846 0.116811 14.1094C0.0556166 14.2341 0.0174376 14.3725 0.00472252 14.5155C-0.00799251 14.6585 0.00503716 14.803 0.0429759 14.9398C0.0809147 15.0766 0.142925 15.2026 0.22503 15.3098C0.307136 15.4169 0.407523 15.5029 0.519755 15.5621C0.631987 15.6214 0.753586 15.6526 0.876754 15.6537C0.981015 16.0329 1.12183 16.397 1.29649 16.739C2.45849 19.0738 4.29662 20.5253 5.91835 21.8057C6.81238 22.5116 7.65666 23.1784 8.31078 23.9231C8.80153 24.5013 9.22839 25.1489 9.58144 25.8507C9.58534 25.8597 9.5905 25.8673 9.59474 25.876C10.2587 27.1729 10.7854 28.7551 10.8837 30.2662C11.0081 32.1754 11.3023 37.3304 11.3948 38.9588C11.0753 39.0774 10.7755 39.2591 10.5086 39.4959C10.31 39.6712 10.1643 39.9157 10.0925 40.194C10.0208 40.4723 10.0267 40.77 10.1094 41.0442C10.1879 41.3239 10.3406 41.5673 10.5454 41.7391C10.7503 41.911 10.9966 42.0023 11.2488 42H16.6801C16.8551 42.0002 17.028 41.9557 17.1866 41.8695C17.3453 41.7833 17.4858 41.6576 17.5983 41.5012C18.7995 39.834 21.7957 35.5371 23.6919 31.6385C31.0323 31.6301 36.0454 31.3192 38.9697 30.6886C39.4052 33.9029 39.9805 37.5655 40.1907 38.8864C40.0092 38.9855 39.8376 39.1075 39.6788 39.2502C39.4616 39.4457 39.3022 39.7157 39.223 40.0224C39.1438 40.329 39.1488 40.6568 39.2373 40.96C39.3257 41.2631 39.4932 41.5264 39.7163 41.7128C39.9394 41.8993 40.2068 41.9996 40.4812 41.9997H45.5721C45.8732 41.9993 46.1652 41.8786 46.3994 41.6576C48.0783 40.0679 51.1503 36.4367 53.712 31.6063C53.7262 31.5832 53.7389 31.559 53.7501 31.5338ZM17.8733 16.2565C16.2311 20.2734 13.3406 23.5228 10.2615 24.8481C9.90794 24.2025 9.49559 23.6034 9.03162 23.0613C8.31136 22.2413 7.42994 21.5455 6.49672 20.8086C4.89206 19.5413 3.23227 18.2309 2.18879 16.1342C1.55357 14.8579 1.79083 14.3637 2.10649 14.0488C2.8522 13.3046 3.44936 11.8278 4.08171 10.2641C4.5991 8.98439 5.13414 7.6612 5.70643 6.9014C6.39895 5.98132 7.63052 4.70897 8.82232 4.15106C8.9394 4.09606 9.04467 4.01165 9.13065 3.90382C9.78214 5.01535 11.3338 4.85146 11.7233 3.83933C11.7505 3.76662 11.7706 3.69061 11.7834 3.61269C13.4234 3.86167 16.0367 3.78193 17.6919 3.8507C17.9725 3.86234 18.2618 3.87412 18.5548 3.88562C19.7618 7.84222 19.5238 12.2191 17.8733 16.2565ZM49.524 27.2852C48.5624 27.0767 43.7899 26.2342 39.7872 28.9726C39.5968 27.4624 39.4669 26.2065 39.4669 25.5927C39.4669 25.433 39.4126 25.2798 39.3158 25.1669C39.2191 25.054 39.0879 24.9906 38.9511 24.9906C38.8143 24.9906 38.6831 25.054 38.5864 25.1669C38.4897 25.2798 38.4353 25.433 38.4353 25.5927C38.4353 26.3055 38.5912 27.7746 38.8121 29.4983C36.3147 30.0429 32.1963 30.346 26.293 30.418C27.4682 29.585 28.4053 28.3893 29.0897 26.8341C30.0428 24.6698 30.464 21.8499 30.3079 18.6791C30.132 15.1069 27.7803 10.2953 25.8906 6.42952C25.4529 5.53433 25.0338 4.67686 24.6848 3.918C25.6787 3.8705 26.678 3.78889 27.6624 3.65537C28.9997 3.47421 30.5318 3.11405 32.1538 2.73221C36.4876 1.71366 41.8811 0.445993 47.1091 1.78109C54.2918 3.61563 56.9684 11.3821 56.9684 15.8465C56.9684 20.9849 55.4042 25.8407 53.3859 29.9204C52.7933 28.886 51.5584 27.727 49.524 27.2852Z"
                fill="black"
              />
              <path
                d="M6.89343 9.19394C4.50433 8.27011 3.11475 10.8646 4.6352 12.3883C5.46664 13.221 6.25702 15.1507 8.06361 14.9906C10.9339 14.7369 10.6696 10.6525 6.89343 9.19394ZM5.81115 11.7043C5.66947 11.7043 5.53097 11.6617 5.41317 11.5818C5.29537 11.502 5.20355 11.3886 5.14933 11.2558C5.09512 11.1231 5.08093 10.977 5.10857 10.8361C5.13621 10.6952 5.20444 10.5658 5.30462 10.4642C5.4048 10.3626 5.53244 10.2934 5.6714 10.2653C5.81036 10.2373 5.95439 10.2517 6.08529 10.3067C6.21618 10.3617 6.32806 10.4548 6.40677 10.5742C6.48549 10.6937 6.5275 10.8342 6.5275 10.9778C6.52746 11.1705 6.45198 11.3552 6.31765 11.4915C6.18331 11.6277 6.00113 11.7042 5.81115 11.7043Z"
                fill="black"
              />
              <path
                d="M29.2534 32.1105C29.2471 32.0787 29.2322 32.0504 29.2113 32.0304C29.1903 32.0104 29.1645 31.9996 29.138 32C28.5727 32.0074 25.5797 32.0461 24.3108 32.0523C24.2913 32.0522 24.272 32.0584 24.255 32.0701C24.2379 32.0818 24.2236 32.0988 24.2134 32.1193C23.3977 33.7222 21.9669 36.2164 21.0219 37.8401C21.0064 37.8669 20.9987 37.8994 21.0002 37.9323C21.0017 37.9652 21.0122 37.9964 21.03 38.0209L22.3505 39.8507L22.3364 39.8768C22.3317 39.887 22.3258 39.8972 22.3211 39.9073C22.2181 40.116 22.1619 40.3549 22.1583 40.5993C22.1547 40.8437 22.2039 41.0849 22.3007 41.2981C22.3975 41.5112 22.5386 41.6886 22.7092 41.812C22.8799 41.9354 23.0741 42.0003 23.2718 42H28.8868C29.0353 41.9999 29.1823 41.9631 29.3191 41.8917C29.456 41.8203 29.5799 41.7158 29.6836 41.5843C29.7873 41.4528 29.8686 41.297 29.9229 41.1261C29.9772 40.9552 30.0033 40.7725 29.9997 40.5889C29.9809 39.6429 29.9315 38.1577 29.8093 36.546C29.7081 35.0532 29.5223 33.5711 29.2534 32.1105Z"
                fill="black"
              />
              <path
                d="M56.468 28.0889C56.4604 28.0636 56.4464 28.0415 56.4278 28.0256C56.4092 28.0097 56.387 28.0008 56.3639 28.0001C56.3409 27.9993 56.3182 28.0067 56.2989 28.0213C56.2795 28.0359 56.2644 28.0569 56.2556 28.0818C56.1031 28.5141 55.9319 28.9372 55.7429 29.3495C54.1619 32.8023 52.2445 36.0311 50.0286 38.9719C50.0097 38.9966 49.9995 39.0286 50 39.0617C50.0005 39.0947 50.0117 39.1264 50.0313 39.1502L50.4144 39.6212C50.3018 39.7766 50.2074 39.9486 50.1335 40.1328C50.0542 40.3363 50.0204 40.5599 50.0351 40.7828C50.0498 41.0057 50.1126 41.2206 50.2177 41.4076C50.3112 41.5855 50.4418 41.733 50.5972 41.8366C50.7526 41.9401 50.9279 41.9963 51.1069 42H56.9229C57.0665 41.9999 57.2086 41.9664 57.341 41.9014C57.4733 41.8364 57.5931 41.7412 57.6935 41.6214C57.7938 41.5017 57.8725 41.3598 57.9251 41.204C57.9777 41.0483 58.0031 40.8819 57.9997 40.7145C57.9422 38.0216 57.6751 32.0536 56.468 28.0889Z"
                fill="black"
              />
            </svg>
          </NavLink>
        </li>
        <li className="sidebar-menu-item" title="Eagles">
          <NavLink to="/eagle">
            <svg
              width="54"
              height="48"
              viewBox="0 0 54 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.6416 25.2826L21.2912 11.837L30.6367 5.74636H32.5354L42.0267 0V1.83862L33.1832 7.0102L44.5086 2.52817L48.5969 2.64342L45.8228 5.28634L34.287 8.96359L47.575 6.55067L52.5394 6.66543L48.1589 8.50405L36.3314 10.5727L48.5969 10.3432L54 11.607L48.5969 13.3309L37.4998 12.6413L46.4067 14.4804L48.8892 16.5491L45.3847 16.8938L38.3759 14.8247L45.2383 18.1577L46.4067 20.3416L39.69 20.6863L41.4423 21.9394L42.0267 24.2488L39.8359 25.2826L40.5662 27.2365L38.8139 28.0413L38.9598 29.4204H35.8202V30.9147H33.1832L34.1412 32.0638L30.1993 31.6043L34.1412 33.5572L37.2082 35.2815L48.5969 36.0858L50.2033 37.6944L48.5969 38.6145L40.5662 36.6611L49.473 39.534L50.7872 40.7979H47.1363L40.5662 38.6145L48.4511 41.6022L49.473 42.9822L47.1363 43.5556L35.1637 39.0745L31.5128 38.8445L33.9954 42.2917L31.6593 41.7174L33.1832 43.5556L25.0885 42.9822L22.1679 41.1426L21.7299 39.0745L19.539 34.3615L11.5082 30.109L13.5601 30.1417L11.5082 28.6092L14.34 28.4564L12.393 27.6135L14.2426 27.3835L12.5878 26.4639L14.8265 25.9277L12.9769 24.6248L17.6416 25.2826Z"
                fill="black"
              />
              <path
                d="M17.7051 23.228L7.76266 20.6848L6.46917 17.7778L4.42639 19.8546V21.4113L10.4187 23.9029L17.2956 24.8889L17.7051 23.228Z"
                fill="black"
              />
              <path
                d="M26.5576 44.6635L24.6831 45.7587V46.7558L24.9945 47.5024L23.4329 46.9543V45.6601L22.4172 46.9048L22.9639 48L21.2461 46.6058L23.1207 44.6635L24.4478 44.4445L26.5576 44.6635Z"
                fill="black"
              />
              <path
                d="M22.1313 44.4445L20.7845 45.0047L20.3609 46.1723L21.2781 47.1111L20.7845 46.179L22.1313 44.4445Z"
                fill="black"
              />
              <path
                d="M22.1313 43.555L20.1672 44.7858L19.78 45.5089L19.1167 45.7031L19.9329 44.2936L18.5486 44.7957L18.1894 46.2222L17.7191 45.4987L18.5216 44.0204L17.47 44.7336L17.36 45.8501L16.8199 44.8886L18.1063 43.3898H20.4857L21.2194 42.6666L22.1313 43.555Z"
                fill="black"
              />
              <path
                d="M0.514134 27.0751L1.67467 26.1379H3.54336L3.6087 25.6171L5.54272 24.8889H11.3041L13.2788 26.1902L10.1843 26.503L12.9565 27.5556L9.92663 28.0112L12.7636 28.7917H10.1843L11.9901 30.2222H10.1534L2.9973 28.4276H1.16004L0.000120163 28.9737L0.514134 27.0751ZM5.2851 26.8099C5.55012 26.8099 5.7646 26.6364 5.7646 26.423C5.7646 26.2086 5.5495 26.0355 5.2851 26.0355C5.01946 26.0355 4.80436 26.2091 4.80436 26.423C4.80436 26.6364 5.02008 26.8099 5.2851 26.8099Z"
                fill="black"
              />
            </svg>
          </NavLink>
        </li>
        <li className="sidebar-menu-item" title="Two-toed Sloth">
          <NavLink to="/sloth">
            <svg
              width="50"
              height="49"
              viewBox="0 0 50 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.935 8.61115C31.1581 8.29831 25.9519 6.81151 24.3206 9.15879C24.3206 9.15879 23.6988 9.70643 24.7094 11.0371C24.7094 11.0371 25.4863 9.55032 26.5744 9.39358C26.7725 9.36526 27.0469 9.35267 27.3669 9.34889L27.5069 8.21963L27.7869 9.34889C29.2306 9.36211 31.2631 9.48926 32.0131 9.31553C32.0131 9.31553 31.4694 9.70643 29.4487 9.78511L29.5262 11.8196L28.8594 9.804C28.0131 9.82917 27.3531 9.8575 26.6731 10.1225L26.8069 12.68L26.1519 10.3711C25.6756 10.6412 25.1644 11.0472 24.5538 11.6628C24.5538 11.6628 25.2531 13.6973 27.1956 13.6192C29.1381 13.5411 33.2562 10.2541 33.8781 8.37636C33.8775 8.37636 32.7119 8.92463 31.935 8.61115Z"
                fill="black"
              />
              <path
                d="M26.8105 1.47044C26.0224 1.75433 21.1449 4.11483 21.4674 6.96192C21.4674 6.96192 21.3624 7.78715 22.9937 8.10944C22.9937 8.10944 22.5974 6.47723 23.3093 5.63437C23.4387 5.48078 23.6362 5.28816 23.8731 5.07225L23.2356 4.13309L24.1881 4.79214C25.2781 3.8385 26.8843 2.57767 27.3318 1.94694C27.3318 1.94694 27.1818 2.60285 25.7199 4.00971L27.1168 5.48204L25.2912 4.41761C24.6743 5.00112 24.1981 5.46252 23.8631 6.11528L25.6456 7.942L23.6362 6.6497C23.4574 7.17027 23.3412 7.81485 23.2887 8.68351C23.2887 8.68351 25.1512 9.74102 26.5543 8.38577C27.958 7.03116 28.8805 1.82105 28.1105 9.99995e-07C28.1112 -0.00125794 27.5987 1.18655 26.8105 1.47044Z"
                fill="black"
              />
              <path
                d="M49.8061 20.0366C49.7286 17.8454 47.2417 15.4975 46.1542 14.2455C45.0667 12.9935 42.8911 12.4459 40.9486 12.4459C39.0061 12.4459 37.9961 14.0894 37.9961 14.0894C37.9961 14.0894 40.7936 13.385 41.5705 13.6198C42.3474 13.8546 46.2324 16.5154 47.7867 19.4109C49.3405 22.3065 47.6311 24.3409 46.8542 25.8277C46.0774 27.3145 42.8136 27.706 40.0942 27.4713C37.3749 27.2365 35.8986 25.8277 35.2768 24.5757C34.6549 23.3237 34.733 21.0545 34.733 21.0545L27.7399 26.2973C28.3618 27.3926 30.848 28.3317 32.7124 28.4885C34.5774 28.6452 37.0636 29.7405 37.763 30.2101C38.4624 30.6797 37.2968 31.3053 37.2968 31.3053C34.888 29.8966 29.4493 28.2537 28.3612 28.2537C27.2737 28.2537 22.1449 21.993 20.7468 19.9586C19.3481 17.9241 19.9699 16.2806 19.9699 14.8718C19.9699 13.4631 21.9124 9.3942 21.9124 9.3942C21.9124 9.3942 21.5237 7.43781 18.8824 9.55093C16.7412 11.2637 14.6006 14.982 13.6175 19.8295C14.6012 18.9036 15.4637 18.0809 15.4637 18.0809L13.44 20.8127C13.3025 21.648 13.1962 22.511 13.1325 23.4017C13.0843 24.0797 13.0631 24.7129 13.0625 25.3103L14.7637 23.9494L13.0693 25.8995C13.125 28.1819 13.5118 29.879 14.0037 31.2556L15.3074 29.1922L14.5125 32.5171C14.9237 33.4348 15.3525 34.2173 15.6956 34.9827C16.3049 36.3411 17.7424 38.0186 19.0262 39.3688L21.0568 37.6428L20.0618 40.427C20.6193 40.9828 21.0724 41.4146 21.2899 41.6343C22.0668 42.4167 20.9793 42.8082 20.9793 42.8082C17.4049 41.4001 12.9762 32.7141 12.9762 32.7141C12.9762 32.7141 9.01372 33.0269 7.14873 30.2101C5.28373 27.3932 6.60498 23.8713 7.61498 21.8369C8.62497 19.8024 7.61498 20.3501 7.61498 20.3501C7.61498 20.3501 5.74998 20.6629 5.20623 20.8977C4.66248 21.1325 1.39875 25.0453 0.932497 25.5149C0.466248 25.9845 0.388749 26.7669 0.388749 26.7669L1.70937 25.5929C1.70937 25.5929 1.32062 26.7669 0.776872 27.7841C0.233124 28.8013 0 30.8358 0 30.8358L1.16562 29.1922V34.2003C0.776872 36.5482 1.16562 37.3306 1.16562 37.3306L1.94249 33.8874C1.94249 33.8874 1.94249 36.5482 1.94249 37.4087C1.94249 38.2691 3.96249 42.2606 5.90498 45.5471C7.84747 48.8335 20.5124 49.225 23.1543 48.9122C25.7649 48.6031 33.7605 43.862 37.848 40.1248L34.1105 40.6951L39.3955 38.5002C40.1086 37.6485 40.7792 36.7081 41.393 35.7544L38.3836 37.0171C38.4936 36.9435 40.1692 35.9508 41.913 34.921C43.8774 31.6862 45.143 28.5659 45.143 28.5659C45.143 28.5659 48.0955 26.9224 49.2611 25.2008C50.4273 23.4798 49.8836 22.2278 49.8061 20.0366Z"
                fill="black"
              />
              <path
                d="M39.3942 17.0629C39.7805 17.0629 40.0936 16.7476 40.0936 16.3585C40.0936 15.9695 39.7805 15.6542 39.3942 15.6542C39.0079 15.6542 38.6948 15.9695 38.6948 16.3585C38.6948 16.7476 39.0079 17.0629 39.3942 17.0629Z"
                fill="black"
              />
              <path
                d="M44.834 22.5407C45.2631 22.5407 45.6109 22.1904 45.6109 21.7583C45.6109 21.3261 45.2631 20.9758 44.834 20.9758C44.4049 20.9758 44.0571 21.3261 44.0571 21.7583C44.0571 22.1904 44.4049 22.5407 44.834 22.5407Z"
                fill="black"
              />
              <path
                d="M39.3947 26.4534C40.4047 26.5314 44.2122 26.3753 45.2997 25.827C46.3872 25.2794 47.7859 23.6359 47.4753 22.1491C47.1647 20.6623 46.3097 17.5319 44.3672 16.2799C42.4247 15.0279 40.9485 14.4016 40.1716 14.4016C39.3947 14.4016 38.0735 14.3235 37.4522 15.1059C37.4522 15.1059 36.5972 15.6536 36.2091 18.0015C35.8204 20.3494 35.3541 22.1491 36.0535 23.6359C36.7528 25.1233 38.3847 26.3753 39.3947 26.4534ZM39.9385 15.4194C41.1041 16.4366 41.026 17.2191 40.6378 17.8454C40.2491 18.4717 39.7828 19.0193 39.7828 19.0193L39.2391 19.1761L38.5397 18.7065L38.2291 19.1761L38.3847 20.9757C38.3847 20.9757 39.1616 22.7754 40.2497 22.9321C41.3372 23.0889 42.1147 23.0889 42.1147 22.7754C42.1147 22.4619 41.8816 21.8362 42.4253 21.3666C42.9691 20.8971 44.6784 20.0366 45.2228 20.5055C45.7666 20.9751 46.3884 23.4791 45.8447 24.0268C45.3009 24.5744 45.3784 24.4964 44.9122 24.0268C44.4459 23.5572 43.436 21.4441 43.436 21.4441C43.436 21.4441 42.581 21.4441 42.581 22.1484C42.581 22.8528 43.1247 23.2437 42.3478 23.5572C41.571 23.87 39.3178 23.4004 38.9291 23.0095C38.5403 22.618 37.9966 21.8356 37.9191 21.0532C37.8416 20.2707 37.5303 19.4883 37.7635 19.0187C37.9966 18.5491 38.3072 17.688 38.6185 18.0796C38.9291 18.4705 39.2403 19.0187 39.6285 18.6272C40.0172 18.2363 40.2503 17.61 40.2503 17.61C40.2503 17.61 38.6185 17.2971 37.531 16.358C37.5297 16.3586 38.7728 14.4022 39.9385 15.4194ZM41.8035 21.5234L41.1041 22.2277C41.1041 22.2277 39.861 21.993 39.1616 20.9757C38.4622 19.9585 39.861 19.4889 39.861 19.4889C40.9485 20.0366 41.8035 21.5234 41.8035 21.5234Z"
                fill="black"
              />
            </svg>
          </NavLink>
        </li>
        <li className="sidebar-menu-item" title="Penguins">
          <NavLink to="/penguin">
            <svg
              width="32"
              height="59"
              viewBox="0 0 32 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.0618 53.6969V55.2321L11.784 56.1838C12.5365 57.1767 11.3126 56.9259 10.0091 56.962L9.02201 56.9879L8.27471 57.567C6.94978 58.5909 6.32494 59.0925 6.70708 57.3744L6.90109 56.4951L5.49133 56.5032C4.06534 56.3999 4.25714 56.166 5.60568 55.6172L7.84905 54.7017L8.12422 53.5804C2.82156 49.7959 2.87394 40.7937 4.39805 35.0654L6.8015 26.0284C3.40952 29.852 3.51058 31.4012 1.94221 36.2501C1.51213 37.5809 0.502941 38.5562 0.201955 36.6868C-0.415507 32.8685 0.395973 28.1611 2.45713 25.0428C4.95944 21.2554 9.85119 14.2369 9.98177 12.6567C10.1728 10.3491 9.35693 8.07626 9.35693 5.37181C9.35693 -1.7906 22.6431 -1.7906 22.6431 5.37181C22.6431 8.07626 21.8272 10.3491 22.0182 12.6567C22.1488 14.2369 27.0406 21.2554 29.5429 25.0428C31.604 28.1611 32.4155 32.8685 31.798 36.6868C31.4971 38.5562 30.4879 37.5809 30.0578 36.2501C28.4894 31.4012 28.5905 29.852 25.1985 26.0284L27.602 35.0654C29.1261 40.7937 29.1784 49.7959 23.8758 53.5804L24.151 54.7017L26.3943 55.6172C27.7429 56.166 27.9347 56.3999 26.5087 56.5032L25.0989 56.4951L25.2929 57.3744C25.6751 59.0925 25.0502 58.5909 23.7253 57.567L22.978 56.9879L21.9909 56.962C20.6874 56.9259 19.4635 57.1767 20.216 56.1838L20.9382 55.2321V53.6969H11.0618ZM19.6059 4.78165C20.1068 4.78165 20.5126 5.18739 20.5126 5.68755C20.5126 6.1892 20.1068 6.59494 19.6059 6.59494C19.105 6.59494 18.6993 6.1892 18.6993 5.68755C18.6993 5.18739 19.105 4.78165 19.6059 4.78165ZM12.3941 4.78165C12.8942 4.78165 13.3 5.18739 13.3 5.68755C13.3 6.1892 12.8942 6.59494 12.3941 6.59494C11.8924 6.59494 11.4867 6.1892 11.4867 5.68755C11.4867 5.18739 11.8924 4.78165 12.3941 4.78165ZM15.9993 10.4214L17.9948 7.53699L17.2821 6.72256C17.3581 5.21026 19.0851 3.23246 20.5377 3.95836C22.0485 4.7123 22.1672 9.85487 18.1194 11.1319C22.362 14.5047 24.6356 27.6883 24.6356 35.224C24.6356 43.9142 20.7693 50.9593 16 50.9593C11.2307 50.9593 7.36438 43.9142 7.36438 35.224C7.36438 27.6979 9.67783 14.5393 13.9219 11.1451C9.70144 9.85192 9.95816 4.38402 11.6106 3.90008C13.0366 3.4818 14.5954 5.30542 14.6692 6.76609L14.0045 7.53699L15.9993 10.4214Z"
                fill="black"
              />
            </svg>
          </NavLink>
        </li>
        <li className="sidebar-menu-item" title="Cheetah">
          <NavLink to="/cheetah">
            <svg
              width="69"
              height="30"
              viewBox="0 0 69 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M34.1533 6.92734C34.1471 6.92734 34.1425 6.92734 34.1371 6.92657C34.5145 6.94336 34.6057 6.94717 34.1533 6.92734Z"
                fill="black"
              />
              <path
                d="M67.8488 18.6362C67.0392 18.3036 62.7929 16.0898 61.0522 15.9647C59.3115 15.8396 59.7229 16.2912 58.1546 15.4124C56.5848 14.5336 56.5848 14.5336 56.5848 14.5336C56.5848 14.5336 57.3202 13.1537 57.6365 11.29C57.9527 9.42643 58.2489 8.40499 58.2489 8.40499C58.2489 8.40499 61.0584 6.45593 62.5207 7.26759C63.9846 8.08002 63.9761 8.11663 64.7594 7.71385C65.5428 7.31108 64.7463 6.51467 64.7463 6.51467C64.7463 6.51467 65.3588 7.28361 65.7763 6.46509C65.9565 6.11113 66.4948 5.19801 65.4214 4.04079C64.0867 2.60207 64.9953 2.62496 64.3527 2.25117C63.7085 1.87585 62.1642 0.93222 60.9648 0.725491C59.7399 0.514184 59.7569 0.669041 58.9232 0.466125C58.6634 0.765158 59.3888 1.54859 59.3888 1.54859C59.3888 1.54859 57.208 1.47155 55.8834 2.1642C54.5602 2.85381 54.5757 3.00409 53.0175 3.6998C51.4592 4.39703 51.8521 3.71353 49.6713 4.48171C47.4906 5.24989 45.4243 7.20428 43.812 7.6185C41.4766 8.21809 32.5046 6.85947 34.1363 6.92584C33.0815 6.87931 29.7856 6.73208 29.7856 6.73208C24.8844 7.00365 23.0972 7.36066 17.292 12.4068C11.4867 17.453 9.21859 18.0564 5.09529 18.138C0.971991 18.2212 2.68565 17.1334 1.01066 17.1013C-0.663565 17.0693 0.244303 17.9916 0.25745 18.6819C0.270596 19.3746 2.60059 20.1138 5.33347 20.1138C8.06713 20.1138 12.2044 18.9978 19.2059 13.4229C21.3047 11.7523 22.5002 10.7904 23.1475 10.261C22.9549 11.1573 21.5607 17.4667 20.2259 18.1037C18.7883 18.7918 16.4901 19.6775 14.8452 20.869C13.2004 22.0621 12.2059 25.4323 12.0799 26.437C11.953 27.4409 12.376 27.9405 12.9011 28.2739C13.4254 28.6065 13.6512 29.0771 14.4377 29.0771C15.2241 29.0771 14.7911 28.4356 14.5212 28.0618C13.9667 27.2929 13.0318 26.4766 14.5599 24.5787C16.6927 21.9278 19.4031 22.3077 22.5892 20.5959C25.7744 18.8856 30.1738 14.809 30.1738 14.809C30.1738 14.809 32.5425 14.3246 34.5887 15.3216C36.6356 16.3194 38.2333 17.7185 41.2948 18.241C44.3571 18.7613 52.3493 16.903 52.3493 16.903C52.3493 16.903 53.5673 18.4973 55.7171 18.5973C57.8661 18.6972 59.6424 17.5217 60.599 17.7055C61.5572 17.8886 65.2536 18.6446 66.1769 19.2022C67.0995 19.7591 66.7816 21.0513 68.9183 20.1138C69.2176 19.9803 68.6569 18.9673 67.8488 18.6362Z"
                fill="black"
              />
              <path
                opacity="0.5"
                d="M58.924 0.0091534L58.9216 0C58.9216 0 58.9232 0.00381353 58.924 0.0091534Z"
                fill="black"
              />
              <path
                d="M30.5534 15.5749C29.9378 16.1348 27.9311 17.9274 25.7913 19.4958C26.1718 20.4044 26.4672 21.2588 26.4726 21.734C26.4896 23.0911 24.2749 26.3705 24.2911 27.3973C24.3073 28.4272 24.7551 28.8856 25.3235 29.4059C25.8926 29.9261 26.4162 30.4815 26.577 29.2899C26.7379 28.0991 25.7155 28.6003 25.7125 27.8909C25.7094 27.1814 26.6335 25.6367 27.372 24.7022C28.1105 23.7693 29.9603 22.107 30.7676 20.6195C31.2556 19.7194 32.083 17.3332 32.6607 15.5863C32.2601 15.5268 31.8874 15.507 31.578 15.507C31.1341 15.507 30.7699 15.5451 30.5534 15.5749Z"
                fill="black"
              />
              <path
                d="M59.1444 18.8062C58.5443 18.9954 57.8413 19.2174 57.058 19.3349C57.6913 19.7598 58.1692 20.1603 58.1948 20.4196C58.276 21.2229 58.5157 21.5029 58.1948 21.8187C57.8746 22.1345 57.7068 22.1643 57.5235 22.4816C57.3395 22.7974 57.283 23.7838 57.7594 23.8867C58.235 23.9882 58.5652 23.7586 58.7314 23.4039C58.8969 23.0476 59.7383 20.235 59.7267 19.5378C59.7228 19.3562 59.5465 19.077 59.2797 18.7643C59.2349 18.778 59.19 18.791 59.1444 18.8062Z"
                fill="black"
              />
            </svg>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
