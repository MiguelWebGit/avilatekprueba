import React from 'react';

export const Footer: React.FC = () => (
  <div className="my-8 mt-40">
    <div className="grid grid-cols-3 mx-5 lg:grid-cols-4 gap-4 ">
      <div className="">
        <h2 className="text-[1.125rem] font-semibold leading-[1.375rem] tracking-[0em] text-left text-red-600 mb-4">
          Sobre nosotros
        </h2>
        <ul className=" text-[1rem] font-normal leading-[1.25rem] tracking-[0.02em] text-left text-gray-600 mb-8">
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus
            molestie rhoncus id nunc, porta leo tempus facilisi.
          </li>
        </ul>
      </div>
      <div className="">
        <h2 className="text-[1.125rem] font-semibold leading-[1.375rem] tracking-[0em] text-left text-red-600 mb-4">
          Mi Cuenta
        </h2>
        <ul className="">
          <li>Información Personal</li>
          <li>Direcciones</li>
          <li>Mascotas</li>
          <li>Ordenes</li>
          <li>Agenda</li>
        </ul>
      </div>
      <div className="">
        <h2 className="text-[1.125rem] font-semibold leading-[1.375rem] tracking-[0em] text-left text-red-600 mb-4">
          Información
        </h2>
        <ul className="">
          <li>Formulario de Contrato</li>
          <li>Preguntas Frecuentes</li>
          <li>Términos y Condiciones</li>
          <li>Políticas de Privacidad</li>
        </ul>
      </div>
      <div className="">
        <h2 className="text-[1.125rem] font-semibold leading-[1.375rem] tracking-[0em] text-left text-red-600 mb-4">
          Atención al Cliente
        </h2>
        <ul className="">
          <li>Bello Monte, calle XXXX, local 1</li>
          <li>(0212) 575 54 12</li>
          <li>soporte@maxipet.com</li>
          <li>Lunes a Viernes</li>
          <li>9:00 a.m. - 5:00 p.m.</li>
          <li>
            <div className="flex">
              {' '}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_185_19770)">
                  <path
                    d="M0.179443 9.89711V4.40033C0.187084 4.32396 0.194174 4.24738 0.20236 4.17155C0.242586 3.78992 0.347002 3.41785 0.511253 3.0705C0.858188 2.32106 1.45602 1.71415 2.20303 1.35293C2.5733 1.16945 2.97397 1.05381 3.38565 1.012L3.62414 0.989258H9.14701C9.16066 0.992325 9.17452 0.994609 9.18849 0.99587C9.43511 1.00807 9.67971 1.04635 9.91814 1.11013C10.6752 1.31347 11.3451 1.75585 11.8265 2.3704C12.3079 2.98495 12.5748 3.73833 12.5868 4.5167C12.5993 6.2641 12.5912 8.01168 12.5901 9.75909C12.5888 10.1072 12.5351 10.4529 12.4307 10.7853C12.2024 11.514 11.746 12.1516 11.1277 12.6052C10.5093 13.0588 9.7614 13.3047 8.99257 13.3074C7.26694 13.3074 5.54116 13.3074 3.81515 13.3074C3.70054 13.3074 3.58539 13.3021 3.47078 13.2934C3.06437 13.2616 2.66689 13.1584 2.29691 12.9885C1.58177 12.6673 0.992188 12.1225 0.618216 11.4375C0.392218 11.0312 0.250796 10.5841 0.20236 10.1225C0.193628 10.0445 0.187084 9.97186 0.179443 9.89711ZM6.38503 1.93453C5.53586 1.93453 4.68651 1.93453 3.83698 1.93453C3.72783 1.93453 3.61869 1.93878 3.50954 1.94907C3.13992 1.97864 2.78203 2.09203 2.46336 2.28021C2.05151 2.50646 1.70995 2.84034 1.4757 3.24559C1.24144 3.65083 1.12343 4.11178 1.13448 4.57886C1.12466 6.29053 1.13176 8.00247 1.13176 9.71414C1.13133 9.90908 1.15182 10.1034 1.19288 10.2942C1.31885 10.8757 1.64115 11.3971 2.10642 11.7721C2.57169 12.147 3.15201 12.3529 3.7513 12.3558C5.48893 12.3623 7.22601 12.3558 8.96364 12.3558C9.11994 12.3558 9.27597 12.3431 9.43025 12.3183C9.9135 12.2445 10.3648 12.033 10.7291 11.7094C11.0186 11.4626 11.2497 11.1555 11.4059 10.8099C11.5621 10.4643 11.6396 10.0889 11.6328 9.71013C11.6357 8.0003 11.6357 6.29021 11.6328 4.57965C11.6332 4.47307 11.6276 4.36636 11.6159 4.26041C11.5432 3.6248 11.2386 3.03757 10.7597 2.6095C10.2807 2.18143 9.66055 1.94208 9.01603 1.93665C8.14067 1.92906 7.26258 1.93717 6.38448 1.93717L6.38503 1.93453Z"
                    fill="#867D77"
                  />
                  <path
                    d="M6.38891 3.83154C7.04963 3.8324 7.69535 4.02778 8.2443 4.39278C8.79326 4.75778 9.22085 5.27619 9.47309 5.88236C9.72527 6.48854 9.79076 7.15517 9.66126 7.79829C9.53175 8.44141 9.21304 9.03188 8.74546 9.49522C8.27781 9.95861 7.6823 10.2741 7.03413 10.4016C6.38601 10.5292 5.71432 10.4631 5.104 10.2117C4.49369 9.9604 3.97215 9.53503 3.6053 8.98952C3.23845 8.44406 3.04276 7.80294 3.04297 7.14715C3.04542 6.26759 3.3989 5.42494 4.02601 4.80353C4.65311 4.18212 5.50274 3.83254 6.38891 3.83154ZM6.38891 4.77893C5.91668 4.77861 5.45498 4.91735 5.06221 5.17751C4.66943 5.43768 4.36322 5.80755 4.18232 6.24045C4.00142 6.67341 3.95394 7.15002 4.0459 7.60973C4.13787 8.06944 4.36514 8.49167 4.69896 8.82317C5.03279 9.15467 5.45815 9.38049 5.92132 9.47198C6.38443 9.56347 6.86446 9.51645 7.30072 9.33705C7.73699 9.15771 8.10989 8.85399 8.37217 8.46426C8.63445 8.07454 8.77443 7.61634 8.77432 7.14764C8.77509 6.83612 8.7138 6.52764 8.59396 6.23969C8.47411 5.95174 8.29806 5.68992 8.07594 5.46976C7.85383 5.24961 7.59002 5.07523 7.29974 4.95667C7.00946 4.83809 6.69845 4.77772 6.38454 4.77893H6.38891Z"
                    fill="#867D77"
                  />
                  <path
                    d="M9.96731 2.88428C10.1093 2.88472 10.2479 2.92696 10.3655 3.00568C10.4832 3.0844 10.5748 3.1961 10.6284 3.3265C10.6821 3.4569 10.6956 3.6003 10.6671 3.7383C10.6386 3.87631 10.5695 4.00275 10.4685 4.10171C10.3675 4.20067 10.2391 4.26752 10.0998 4.29399C9.96032 4.32046 9.81614 4.30532 9.68549 4.25035C9.55478 4.19538 9.44351 4.10317 9.36574 3.98534C9.28797 3.8675 9.2472 3.72947 9.24857 3.5886C9.25048 3.40083 9.3271 3.22144 9.46173 3.08952C9.59637 2.9576 9.77815 2.8837 9.96731 2.88428Z"
                    fill="#867D77"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_185_19770">
                    <rect
                      width="13.0977"
                      height="13"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                className="ml-1"
                width="17"
                height="14"
                viewBox="0 0 17 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_185_19776)">
                  <path
                    d="M5.43373 10.6111C5.22527 10.6082 5.01789 10.5808 4.81595 10.5294C4.49526 10.4483 4.18638 10.3268 3.89693 10.1675C3.29558 9.84611 2.76407 9.40996 2.33285 8.88427C2.10406 8.6136 1.92372 8.30588 1.79965 7.97471C1.7931 7.95629 1.78765 7.93744 1.78056 7.91469C2.24798 8.00688 2.73112 7.98289 3.18692 7.84487C2.47106 7.70664 1.82686 7.32319 1.36688 6.76154C0.897958 6.20156 0.648539 5.49235 0.664519 4.76439C1.11825 4.96142 1.60006 5.08731 2.09272 5.13757C1.99776 5.06445 1.90881 5.00062 1.82476 4.93075C1.23564 4.46296 0.839111 3.79752 0.70982 3.05977C0.594103 2.4565 0.676949 1.83221 0.946125 1.27925C0.99415 1.18175 1.05527 1.09071 1.11748 0.987793L1.24301 1.13405C1.82592 1.82764 2.48487 2.45469 3.20766 3.00344C4.09184 3.67781 5.09846 4.177 6.17263 4.47398C6.87696 4.66387 7.60339 4.76105 8.33321 4.7628C8.34794 4.7628 8.36273 4.76287 8.38238 4.75962C8.32431 4.50536 8.30483 4.24386 8.32453 3.98389C8.33817 3.33228 8.5712 2.70402 8.98646 2.19914C9.49159 1.55756 10.2297 1.13768 11.0428 1.02958C11.5031 0.960581 11.9728 0.987726 12.4219 1.10946C12.8709 1.23119 13.2893 1.44491 13.6504 1.73655C13.7448 1.80913 13.831 1.89243 13.9233 1.96718C13.9442 1.98274 13.9703 1.98996 13.9964 1.98728C14.6735 1.86185 15.3238 1.6218 15.919 1.27767L15.9588 1.25704C15.9654 1.25527 15.9722 1.25426 15.9791 1.25387C15.7054 1.95102 15.2101 2.54061 14.5683 2.93309C15.1872 2.86425 15.7921 2.70302 16.3627 2.45516C16.3147 2.51962 16.2671 2.58459 16.218 2.64797C15.8135 3.18856 15.325 3.66212 14.7708 4.05054C14.7588 4.05874 14.7493 4.06989 14.7433 4.08307C14.7373 4.09625 14.7352 4.11078 14.737 4.12512C14.7309 4.42412 14.7336 4.7211 14.7151 5.02173C14.6676 5.73144 14.5284 6.43193 14.3009 7.10642C13.8392 8.52905 13.0254 9.81432 11.934 10.8441C11.1363 11.5994 10.1988 12.194 9.1731 12.5953C8.56296 12.8348 7.92887 13.0092 7.28157 13.1158C6.55901 13.2309 5.82669 13.2748 5.09537 13.2464C4.65605 13.2323 4.21783 13.2062 3.78124 13.1526C2.89221 13.0577 2.02533 12.8165 1.21626 12.4387C1.03398 12.3504 0.857164 12.2507 0.677618 12.1559L0.682531 12.1409H0.739832C1.10056 12.1333 1.46239 12.1407 1.82258 12.1163C2.73424 12.0695 3.61943 11.7962 4.39683 11.3212C4.74119 11.1094 5.06808 10.8701 5.40262 10.6431C5.40535 10.6328 5.4119 10.6263 5.43373 10.6111Z"
                    fill="#867D77"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_185_19776">
                    <rect
                      width="16.3721"
                      height="13"
                      fill="white"
                      transform="translate(0.195312 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                className="ml-1"
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_185_19774)">
                  <path
                    d="M5.32071 13.1425V7.55778H7.19999C7.2943 6.82978 7.38755 6.11509 7.4829 5.37876H5.33486C5.33486 4.79636 5.3291 4.23488 5.33958 3.67276C5.34895 3.55626 5.38477 3.44324 5.44435 3.34243C5.51842 3.2185 5.62523 3.11718 5.75322 3.04917C5.88121 2.98116 6.02549 2.94921 6.17051 2.95675C6.56187 2.93751 6.95638 2.94264 7.34669 2.93796C7.4106 2.93796 7.47504 2.93796 7.54106 2.93796V0.992023C6.84337 0.910319 6.13971 0.891247 5.43859 0.934894C4.90198 0.974012 4.39094 1.17796 3.97636 1.51837C3.69132 1.76337 3.46243 2.06616 3.3051 2.40628C3.14777 2.7464 3.06564 3.11595 3.06424 3.49021C3.03595 4.06221 3.05009 4.6341 3.0459 5.2061C3.0459 5.2607 3.0459 5.31533 3.0459 5.38917H1.16821V7.56693H3.03699V13.1429"
                    fill="#867D77"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_185_19774">
                    <rect
                      width="7.33472"
                      height="13"
                      fill="white"
                      transform="translate(0.665283 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className="flex justify-start ml-7 absolute mt-[2.5rem]">
      <svg
        className="hidden md:block"
        width="39"
        height="40"
        viewBox="0 0 39 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M38.3035 10.06L30.4478 0.996252C29.8991 0.363751 29.1028 0 28.2653 0H10.219C9.38153 0 8.58528 0.363751 8.03653 0.996252L0.180891 10.06C-0.16286 10.3138 0.0158904 10.8594 0.443391 10.8594H38.041C38.4685 10.8594 38.6478 10.3138 38.3035 10.06Z"
          fill="#E2081E"
        />
        <path
          d="M1.11707 39.9999H10.2983V30.0617C10.2983 25.143 14.2858 21.1554 19.2046 21.1554C21.6609 21.1554 23.8859 22.143 25.4984 23.7617C27.1046 25.3742 28.1046 27.593 28.1046 30.0617V39.9999H37.2921V12.1123H1.11707V39.9999Z"
          fill="#E2081E"
        />
        <path
          d="M26.5515 30.1892C25.8584 30.0211 24.0834 29.9267 23.6947 29.4011C23.2953 28.8761 22.739 27.2061 20.0497 27.2061C17.3609 27.2061 17.0665 28.3511 17.0665 28.3511C17.0665 28.3511 12.9278 32.6154 11.5203 34.7479V39.9998H21.8247C21.8247 39.9998 21.7934 38.3298 21.2678 37.0167C21.2678 37.0167 21.8247 35.4098 22.9065 35.0836C22.9065 35.0836 23.9572 35.3461 24.6397 34.4217C24.6397 34.4217 27.0447 33.6023 26.709 31.4067C26.709 31.4073 27.234 30.3573 26.5515 30.1892ZM22.5703 30.2311C22.2028 30.2942 21.8772 30.1892 21.8453 30.0104C21.8134 29.8211 22.0865 29.6217 22.4547 29.5586C22.8222 29.4954 23.1478 29.5898 23.1797 29.7792C23.2109 29.9686 22.9384 30.1679 22.5703 30.2311Z"
          fill="#E2081E"
        />
      </svg>
    </div>
    <div className="flex justify-end mr-7">
      <svg
        className="hidden md:block absolute mt-5"
        width="54"
        height="60"
        viewBox="0 0 54 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M53.1132 25.3641C53.1132 23.8571 52.4423 22.5182 51.3969 21.5922C51.7205 20.925 51.9181 20.1841 51.9181 19.3922C51.9181 17.4724 50.838 15.8224 49.264 14.9672C49.4225 14.4754 49.5301 13.963 49.5301 13.4204C49.5301 10.7124 47.4002 8.52203 44.7261 8.38638C44.5904 5.71453 42.4008 3.5831 39.6935 3.5831C38.9002 3.5831 38.1615 3.78143 37.4935 4.10656C36.5675 3.06038 35.2287 2.388 33.7224 2.388C32.5996 2.388 31.5741 2.76474 30.7358 3.3833C30.0863 2.90334 29.3217 2.58485 28.4864 2.46246C27.6032 0.992357 26.0077 0 24.1675 0C22.6598 0 21.3224 0.672385 20.3964 1.71782C19.7284 1.39343 18.9882 1.1951 18.1949 1.1951C15.9183 1.1951 14.0132 2.71092 13.3799 4.78116C11.0531 4.79885 9.11627 6.39355 8.54562 8.5471C6.79462 9.01084 5.427 10.3799 4.96326 12.1302C2.79718 12.7031 1.19363 14.6568 1.19363 17.0043C1.19363 17.7961 1.39122 18.537 1.71635 19.2042C0.67091 20.1295 0 21.4691 0 22.9761C0 24.0975 0.376005 25.1223 0.993832 25.9627C0.376005 26.8003 0 27.8265 0 28.9487C0 30.7771 0.980561 32.3659 2.43518 33.255C2.42044 33.4121 2.38874 33.5647 2.38874 33.7261C2.38874 36.0714 3.99155 38.0266 6.15836 38.5972C6.72827 40.7633 8.68423 42.3676 11.028 42.3676C12.8579 42.3676 14.4467 41.387 15.3351 39.9309C15.4936 39.9464 15.6462 39.9789 15.8062 39.9789C16.1328 39.9789 16.4484 39.9361 16.7565 39.8779C18.6483 41.4151 20.7945 40.9882 21.4566 43.4094C24.3223 53.863 19.7918 60 19.7918 60H30.5021C30.5021 60 25.3958 47.8484 29.5576 45.0734C30.6532 44.3449 31.7842 43.2096 32.8252 41.9827C33.6576 43.6239 35.3407 44.7563 37.3063 44.7563C39.1376 44.7563 40.725 43.7758 41.6134 42.3197C41.7704 42.3352 41.9245 42.3676 42.0845 42.3676C44.878 42.3676 47.1429 40.102 47.1429 37.31C47.1429 36.9244 47.0912 36.5521 47.0087 36.1923C49.1467 35.6017 50.7252 33.6635 50.7252 31.3374C50.7252 30.794 50.6183 30.2809 50.4605 29.7914C52.0339 28.931 53.1132 27.2817 53.1132 25.3641ZM20.8454 39.5793C20.0926 39.3596 19.4313 39.145 18.8481 38.9364C19.5102 38.4313 20.0521 37.7752 20.4016 37.0062C21.4065 37.4287 22.4954 37.6889 23.6315 37.7774C23.6632 39.2327 23.0166 40.2133 20.8454 39.5793ZM25.3412 39.9678C25.3759 39.1443 25.356 38.4188 25.3007 37.7516C26.1043 37.6838 26.8887 37.5577 27.6319 37.3218C27.6894 37.5606 27.7742 37.7907 27.8634 38.0141C26.5865 41.3723 25.1525 44.311 25.3412 39.9678ZM27.4491 43.0193C28.322 42.0336 28.9206 41.0191 29.3409 40.026C29.7884 40.3925 30.3001 40.6837 30.8574 40.8798C29.004 42.1088 27.4491 43.0193 27.4491 43.0193Z"
          fill="#E2081E"
        />
      </svg>
    </div>
    <div className="md:text-[0.1rems] text-xs mt-20 flex justify-center text-white h-7 sm:h-6 items-center px-3 bg-custom-red">
      Copyright ©2021 Maxi Pet Todos los Derechos Reservados Desarrollado por
      Avila Tek{' '}
      <svg
        className="ml-1 mb[0.7rem]"
        width="28"
        height="18"
        viewBox="0 0 28 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.6774 2.80484C19.4976 2.84978 19.3679 2.9131 19.1733 3.05076C18.8207 3.30033 18.8538 3.23924 17.5713 6.004C16.9379 7.3695 16.4136 8.49077 16.4061 8.49583C16.3986 8.50089 16.0359 7.73358 15.6 6.79066C14.8043 5.06949 14.7046 4.86829 14.5676 4.70809C13.9313 3.96332 12.6948 4.04539 12.191 4.86576C12.1442 4.9421 11.6709 5.9444 11.1393 7.09314L10.1728 9.18167L9.49991 7.72889C8.71918 6.04359 8.6215 5.88487 8.2448 5.69074L8.15634 5.64513V4.93295C8.15634 4.30724 8.15179 4.21892 8.11875 4.20523C8.09803 4.19659 7.94823 4.1896 7.78583 4.1896H7.49051V4.845V5.50047H7.38731C6.98645 5.50047 6.46106 5.83308 6.22369 6.23728C6.14625 6.36921 2.18774 14.9238 2.18774 14.9593C2.18774 14.9761 6.33611 14.9848 14.3984 14.9848C22.5077 14.9848 26.6091 14.9762 26.6091 14.9591C26.6091 14.9158 21.3627 3.58941 21.2849 3.46485C20.9597 2.94413 20.2638 2.6584 19.6774 2.80484Z"
          fill="#FEFEFE"
        />
      </svg>
    </div>
  </div>
);
