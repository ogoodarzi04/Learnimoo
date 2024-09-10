import React, { useState } from "react";
//
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineCalendar } from "react-icons/hi2";
import { SlEye } from "react-icons/sl";
import { HiOutlineBars4 } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
//

export default function ArticleDetails() {
   const [showHeadlines, setShowHeadlines] = useState(true);
   //
   return (
      <div className="ArticleDetails bg-header-color dark:bg-white rounded-2xl p-4 sm:p-5 text-white dark:!text-black">
         {/* <!-- head --> */}
         <div className=" flex items-center gap-x-2 mb-5 sm:mb-6 pb-5 sm:pb-6  relative mt-7 dark:!border-gray-200" style={{ borderBottom: "1px solid #ffffff1a" }}>
            <span className="absolute -right-6 sm:-right-[21px] block w-2.5 h-[34px] md:h-9.5 bg-blue-500 rounded-r-sm"></span>
            <h1 className=" danaDemiBold text-xl md:text-[26px]/10 text-white dark:!text-black ms-2.5">فرق بک اند و فرانت اند چیست</h1>
         </div>
         {/* <!-- info --> */}
         <div className="grid sm:flex grid-cols-2 sm:grid-cols-4 gap-x-10 gap-y-3 mb-10 danaMedium text-sm sm:!text-[16px]" style={{ color: "rgb(100 116 139)" }}>
            {/* <!-- author --> */}
            <div className="flex items-center gap-x-3.5">
               <HiOutlineUser style={{ fontSize: 27 }} />
               <span>ارمیا مزرعه</span>
            </div>
            {/* <!-- date --> */}
            <div className="flex items-center gap-x-3.5">
               <HiOutlineCalendar style={{ fontSize: 27 }} />
               <span>1403/05/31</span>
            </div>
            {/* <!-- category --> */}
            {/* <!-- view count --> */}
            <div className="flex items-center gap-x-3.5">
               <SlEye style={{ fontSize: 27 }} />
               <span>21</span>
            </div>
         </div>
         <div>
            {/* <!-- thumbnail --> */}
            <img src="https://sabzlearn.ir/wp-content/uploads/2024/08/000.webp" className="aspect-video object-cover rounded-2xl w-full" alt="فرق بک اند و فرانت اند چیست" />
            <div className="rounded-lg !rounded-tr-none  mt-8 overflow-hidden mb-6 md:mb-8 dark:!border-gray-300" id="toc-collapse" style={{ border: "1px solid rgb(100 116 139)" }}>
               <div className="flex items-center justify-between px-4 py-[20px] dark:!border-b-gray-300" style={{ borderBottom: "1px solid rgb(100 116 139)" }}>
                  <div className="flex items-center gap-x-3.5">
                     <HiOutlineBars4 style={{ fontSize: 24 }} />
                     <span className="text-sm md:!text-[16.5px] md:danaMedium">سرفصل های این مقاله: </span>
                  </div>
                  <button
                     onClick={() => setShowHeadlines((prev) => !prev)}
                     className=" flex   p-1.5 rounded-full my-auto dark:!bg-gray-color"
                     style={{ backgroundColor: "rgb(100 116 139)" }}
                     data-collapse="#toc-collapse"
                     data-height="h-16 md:h-17"
                  >
                     <IoIosArrowDown className="m-auto" style={{ fontSize: 21 }} />
                  </button>
               </div>
               {showHeadlines ? (
                  <div className="flex flex-col gap-4  p-5 text-sm md:!text-[16.5px] ">
                     <a href="#h_1" className=" danaDemiBold text-white dark:!text-black">
                        <span>بک اند و فرانت اند چیست؟</span>
                     </a>
                     <a href="#h_2" className=" danaDemiBold text-white dark:!text-black">
                        <span>فرق بک اند و فرانت اند چیست</span>
                     </a>
                     <a href="#h_3" className=" danaDemiBold text-white dark:!text-black">
                        <span>زبان‌ های برنامه‌ نویسی بک اند و فرانت اند</span>
                     </a>
                     <a href="#h_4" className=" danaDemiBold text-white dark:!text-black">
                        <span>درآمد برنامه نویسی بک اند بالاتر است یا فرانت اند؟</span>
                     </a>
                     <a href="#h_5" className=" danaDemiBold text-white dark:!text-black">
                        <span>برنامه‌ نویسی بک اند سخت‌تر است یا فرانت اند؟</span>
                     </a>
                  </div>
               ) : (
                  ""
               )}
            </div>
            {/* // <!-- Full Description --> */}
            <div className="wp-content danaDemiBold space-y-10">
               <div className=" mt-5 mb-14 danaDemiBold">
                  <p className=" text-gray-color dark:!text-text-gray-color">
                     <strong className=" text-white dark:!text-black">بک اند و فرانت اند</strong> پایه و اساس تمام سایت‌هایی است که امروزه مشاهده می‌کنید؛ یک سایت بدون این 2 بخش وجود نخواهد داشت و شما
                     نمیتوانید سایت را فقط با فرانت یا فقط بک اند خالی طراحی کنید. می‌پرسید چرا؟ در ادامه این مقاله از
                     <a href="" className=" text-blue-500">
                        لرنیمو
                     </a>
                     پس از معرفی هر کدام از بخش‌ها به جواب این سوال خواهید رسید.
                  </p>
               </div>
               <p>
                  <img
                     decoding="async"
                     loading="lazy"
                     className="aligncenter wp-image-4841 size-full rounded-2xl"
                     src="https://sabzlearn.ir/wp-content/uploads/2024/08/001.webp"
                     alt="بک اند و فرانت اند چیست؟"
                     width="1200"
                     height="600"
                     srcset="https://sabzlearn.ir/wp-content/uploads/2024/08/001.webp 1200w, https://sabzlearn.ir/wp-content/uploads/2024/08/001-300x150.webp 300w, https://sabzlearn.ir/wp-content/uploads/2024/08/001-1024x512.webp 1024w, https://sabzlearn.ir/wp-content/uploads/2024/08/001-768x384.webp 768w"
                     sizes="(max-width: 1200px) 100vw, 1200px"
                  />
               </p>
               <h2 id="h_1" className=" text-3xl danaBold">
                  بک اند و فرانت اند چیست؟
               </h2>
               <p className=" text-gray-color dark:!text-text-gray-color">
                  <strong>بک اند و فرانت اند</strong> هرکدام بخش مجزایی برای خود هستند اما در کنار همدیگر کار می‌کنند و یک سایت فوق العاده را می‌سازند و برای آن که بدانید دقیقا
                  <strong>فرق بک اند و فرانت اند</strong> چی هست لازمه بدانید هر کدام به تنهایی چه کاری را انجام میدهد.
               </p>
               <h3 className=" text-3xl danaBold">فرانت اند چیست؟</h3>
               <p className=" text-gray-color dark:!text-text-gray-color">
                  فرانت اند یا به اصلاح انگلیسی (Front End) به فرآیند توسعه و پیاده سازیقسمت های مربوط به رابط کاربرییک سایت می‌گویند یا همان بخش ظاهری سایت؛ برای مثال: زمانی که شما وارد سایتی می‌شوید
                  هرآنچه برای شما قابل مشاهده است فرانت اند است. برای مثال: دکمه ها، عکس ها، ویدیوها، متن ها و ظاهر آن سایت بخشی از فرانت اند است.
               </p>
               <p className=" text-gray-color dark:!text-text-gray-color">
                  برنامه‌نویسان فرانت‌اند همچنین باید با مفاهیم طراحی رابط کاربری (UI) و تجربه کاربری (UX) آشنا باشند تا بتوانند رابط کاربری مناسبی را پیاده‌سازی کنند.
               </p>
               <p className=" text-gray-color dark:!text-text-gray-color">پس تا اینجا متوجه شدیم که فرانت اند چیست و در ادامه نیز به مفهوم بک اند می‌پردازیم.</p>
               <h3 className=" text-3xl danaBold">بک اند چیست؟</h3>
               <p className=" text-gray-color dark:!text-text-gray-color">
                  <a href="https://sabzlearn.ir/blog/what-is-backend/" className=" text-blue-500">
                     بک اند چیست؟
                  </a>{" "}
                  به برنامه نویسی سمت سرور بک اند گفته می‎‌شود. ممکن است کمی مبهم باشد پس با سوال ساده تر سعی میکنم مفهوم را به شما منتقل کنم؛ برنامه نویسی سمت سرور چیست؟ جواب ساده این است: همانطور که
                  در بخش قبل ذکر کردیم هر سایت، اپلیکیشن و هر نرم افزار از 2 بخش تشکیل می‌شود؛ بخش اول ظاهرکار است، برنامه دیجیکالا را در نظر بگیرید، شما وارد نرم افزار می‌شوید و تمام محصولات را
                  مشاهده می‌کنید؛ به تمام آن چه در این برنامه قابل مشاهده است فرانت اند می‌گویند.
               </p>
               <p className=" text-gray-color dark:!text-text-gray-color">
                  بخش دوم کد نویسی سمت سرور است یجور مثل برنامه ریزی؛ شما هنگامی که تصمیم می‌گیرید از دیجیکالا خرید کنید تنها یک دکمه را فشار می‌دهید، آن دکمه باید دستوراتی داشته باشد تا سفارش شما ثبت
                  شود و محصول مدنظر برای شما ارسال شود؛ و شما هیچ کدام از این مراحل را مشاهده نمی‌کنید و فقط دکمه را می‌بینید؛ پس به مراحلی که توسط کاربر عادی قابل مشاهده نیست بک اند می‌گویند. اما
                  برنامه نویس بک اند چیست؟ به فردی که این مراحل را برنامه نویسی می‌کند، برنامه نویس بک اند یا Backend developer گفته می‌شود.
               </p>
               <p className=" text-gray-color dark:!text-text-gray-color">
                  حالا که متوجه شدید که هر بخش برای چه کاری است بهتر است <strong>فرق بک اند و فرانت اند</strong> را نیز بررسی کنیم.
               </p>
               <p className=" text-gray-color dark:!text-text-gray-color">
                  <img
                     decoding="async"
                     loading="lazy"
                     className="size-full wp-image-4842 aligncenter  rounded-2xl"
                     src="https://sabzlearn.ir/wp-content/uploads/2024/08/002.webp"
                     alt="بک اند و فرانت اند"
                     width="1200"
                     height="600"
                     srcset="https://sabzlearn.ir/wp-content/uploads/2024/08/002.webp 1200w, https://sabzlearn.ir/wp-content/uploads/2024/08/002-300x150.webp 300w, https://sabzlearn.ir/wp-content/uploads/2024/08/002-1024x512.webp 1024w, https://sabzlearn.ir/wp-content/uploads/2024/08/002-768x384.webp 768w"
                     sizes="(max-width: 1200px) 100vw, 1200px"
                  />
               </p>
               <h2 id="h_2" className=" text-3xl danaBold">
                  فرق بک اند و فرانت اند چیست
               </h2>
               <p className=" text-gray-color dark:!text-text-gray-color">
                  فرانت اند زبان های برنامه نویسی مخصوص خودش را دارد و با کمک آن‌ها قادر خواهی بود در طراحی سایت فوق العاده عمل کنید و یک زیبایی چشم نواز خلق کنید اما بر خلاف آن، بک اند و زبان های آن
                  هیچ مهارتی در طراحی ندارند و شما اصلا نمیتوانید برای طراحی از آن استفاده کنید.
               </p>
               <p className=" text-gray-color dark:!text-text-gray-color">خب مشخص است به دلیل ضعف آن نیست بلکه به این دلیل است که برای این کار ساخته نشده!!</p>
               <p className=" text-gray-color dark:!text-text-gray-color">بک اند برای کنترل دستورات و برنامه ریزی کدها و عملکرد یک سایت طراحی شده و بیشتر جنبه مدیریتی داره تا ظاهر سازی و…</p>
               <p className=" text-gray-color dark:!text-text-gray-color">
                  اما با وجود این تفاوت‌ها این دو بخش در کنار دیگر یک سایت را تشکیل می‌دهن؛ پس برای انتخاب بین <strong>بک اند و فرانت اند</strong> لازم است بدانید که در کدام راه دوست دارید فعالیت
                  کنید؛ ظاهر یا عملکرد ؟
               </p>
               <p className=" text-gray-color dark:!text-text-gray-color">البته میتوانید هر دو را نیز انتخاب کنید اما کارتان را کمی سخت می‌کند…</p>
               <p className=" text-gray-color dark:!text-text-gray-color">
                  <img
                     decoding="async"
                     loading="lazy"
                     className="size-full wp-image-4843 aligncenter rounded-2xl"
                     src="https://sabzlearn.ir/wp-content/uploads/2024/08/003.webp"
                     alt="بک اند و فرانت اند"
                     width="1200"
                     height="600"
                     srcset="https://sabzlearn.ir/wp-content/uploads/2024/08/003.webp 1200w, https://sabzlearn.ir/wp-content/uploads/2024/08/003-300x150.webp 300w, https://sabzlearn.ir/wp-content/uploads/2024/08/003-1024x512.webp 1024w, https://sabzlearn.ir/wp-content/uploads/2024/08/003-768x384.webp 768w"
                     sizes="(max-width: 1200px) 100vw, 1200px"
                  />
               </p>
               <h2 id="h_3" className=" text-3xl danaBold">
                  زبان‌ های برنامه‌ نویسی بک اند و فرانت اند
               </h2>
               <p className=" text-gray-color dark:!text-text-gray-color">
                  اگر دقت کرده باشید در بخش قبل ذکر کردیم که <strong>بک اند و فرانت اند</strong> زبان های برنامه نویسی منحصر به فرد خودشان را دارند پس برای شروع لازم است برای مسیرتان زبان های مربوطه
                  را یاد بگیرید تا به بک اند یا فرانت اند مسلط شوید؛ در ادامه به معرفی آن‌ها خواهیم پرداخت:
               </p>
               <h3 className=" text-3xl danaBold">زبان‌های برنامه نویسی فرانت اند</h3>
               <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Java Script</li>
                  <li>و…</li>
               </ul>
               <p className=" text-gray-color dark:!text-text-gray-color">
                  لازم است در این نقطه ذکر کنم که html و css زبان برنامه نویسی نیستند اما پایه و اساس طراحی وب هستند و باید حتما اول آن ها را یاد بگیرید و پس از تسلط به آن‌ها به سراغ یادگیری زبان جاوا
                  اسکریپت بروید؛ پس از یادگیری جاوا اسکریپت شما یک طراح فرانت خیلی خوب خواهید بود و اگر مایل به حرفه‌ای‌تر شدن باشید می‌توانید فریمورک ها و کتابخانه های جاوا اسکریپت و css را یاد
                  بگیرید که در ادامه چند نمونه برای شما نام خواهم برد:
               </p>
               <ul>
                  <li>BootStrap</li>
                  <li>Tailwind</li>
                  <li>SASS</li>
                  <li>React</li>
                  <li>Jquery</li>
                  <li>TypeScript</li>
                  <li>Vue</li>
                  <li>AngularJS</li>
                  <li>و…</li>
               </ul>
               <p className=" text-gray-color dark:!text-text-gray-color">
                  معمولا هر کتابخانه یا فریمورک را باید طبق نیازی که دارید یاد بگیرید چون هر کدام کارایی خاص خودشان را دارند و یادگیری برخی از آن‌ها مزیت برای استخدام محسوب می‌شوند.
               </p>
               <p className=" text-gray-color dark:!text-text-gray-color">
                  <span style={{ fontSize: "13pt" }}>
                     <strong className=" text-white dark:!text-black danaBold">
                        پیشنهاد مطالعه:
                        <a href="" className=" text-blue-500">
                           بهترین زبان برنامه نویسی برای شروع
                        </a>
                     </strong>
                  </span>
               </p>
               <h3 className=" text-3xl danaBold">زبان‌های برنامه نویسی برای بک اند</h3>
               <p className=" text-gray-color dark:!text-text-gray-color">
                  برای فعالیت در بخش بک اند لازم است html و css را یاد بگیرید؛ با اینکه شما به طور مستقیم با این زبان‌ها کار نمی‌کنید اما این 2 زبان ساختار اصلی یک سایت را تشکیل میدهند و لازم است به
                  عنوان فردی که در بخش بک اند فعالیت میکنید با این زبان ها آشنا باشید.
               </p>
               <p className=" text-gray-color dark:!text-text-gray-color">در ادامه به زبان‌ها و فریمورک هایی که برای بک اند به آن‌ها نیاز دارید می‌پردازیم:</p>
               <ul>
                  <li>PHP</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>NodeJS</li>
                  <li>Django</li>
                  <li>Laravel</li>
                  <li>Spring</li>
               </ul>
               <p className=" text-gray-color dark:!text-text-gray-color">
                  هرگونه سوال تخصصی‌تر در رابطه با مسیر <strong className=" text-white dark:!text-black  danaBold">بک اند و فرانت اند</strong> داشتید می‌تونید در بخش کامنت های همین مقاله بپرسید تا
                  افراد متخصص شما را راهنمایی کنند.
               </p>
               <p className=" text-gray-color dark:!text-text-gray-color">
                  <img
                     decoding="async"
                     loading="lazy"
                     className="aligncenter wp-image-4837 size-full rounded-2xl"
                     src="https://sabzlearn.ir/wp-content/uploads/2024/08/04-1.webp"
                     alt="درآمد برنامه نویسی بک اند بالاتر است یا فرانت اند؟"
                     width="1200"
                     height="600"
                     srcset="https://sabzlearn.ir/wp-content/uploads/2024/08/04-1.webp 1200w, https://sabzlearn.ir/wp-content/uploads/2024/08/04-1-300x150.webp 300w, https://sabzlearn.ir/wp-content/uploads/2024/08/04-1-1024x512.webp 1024w, https://sabzlearn.ir/wp-content/uploads/2024/08/04-1-768x384.webp 768w"
                     sizes="(max-width: 1200px) 100vw, 1200px"
                  />
               </p>
               <h2 id="h_4" className=" text-3xl danaBold">
                  درآمد برنامه نویسی بک اند بالاتر است یا فرانت اند؟
               </h2>
               <p className=" text-gray-color dark:!text-text-gray-color">
                  به طور خلاصه بخواهم به این سوال جواب بدهم باید بگویم با اختلاف کم حقوق برنامه نویس بک اند بیشتر است؛ زیرا بخش بک اند معمولا سخت‌تر است و دردسرهای بیشتری دارد و فاقد جذابیت‌های بصری
                  است و کاملا وابسته است.
               </p>
               <p className=" text-gray-color dark:!text-text-gray-color">
                  یعنی یک قالب فرانت باید وجود داشته باشد تا بک اند کار فعالیت خودش را شروع کند؛ اما بر خلاف آن در بخش فرانت طراح میتواند پوسته های متنوعی را طراحی کند و در پایان کار آن را تحویل بک
                  اند کار دهد تا آن پوسته را فعال کند تا کار کند.
               </p>
               <p className=" text-gray-color dark:!text-text-gray-color">
                  درکل این مسیری است که باید با علاقه طی شود؛ اگر علاقه دارید نتیجه کار را بصورت ظاهری ببینید قطعا فرانت اند برای شما گزینه مناسب تری خواهد بود و اگر فرد منطقی هستید و دوست دارید
                  مدیریت و کارکرد یک سایت را برنامه نویسی کنید بک اند برای شما مناسب تر خواهد بود.
               </p>
               <p className=" text-gray-color dark:!text-text-gray-color">
                  <img
                     decoding="async"
                     loading="lazy"
                     className="alignnone wp-image-4838 size-full rounded-2xl"
                     src="https://sabzlearn.ir/wp-content/uploads/2024/08/05-1.webp"
                     alt="برنامه‌ نویسی بک اند سخت‌تر است یا فرانت اند؟"
                     width="1200"
                     height="600"
                     srcset="https://sabzlearn.ir/wp-content/uploads/2024/08/05-1.webp 1200w, https://sabzlearn.ir/wp-content/uploads/2024/08/05-1-300x150.webp 300w, https://sabzlearn.ir/wp-content/uploads/2024/08/05-1-1024x512.webp 1024w, https://sabzlearn.ir/wp-content/uploads/2024/08/05-1-768x384.webp 768w"
                     sizes="(max-width: 1200px) 100vw, 1200px"
                  />
               </p>
               <h2 id="h_5" className=" text-3xl danaBold">
                  برنامه‌ نویسی بک اند سخت‌تر است یا فرانت اند؟
               </h2>
               <p className=" text-gray-color dark:!text-text-gray-color">
                  به طور کلی بخش فرانت اند در مقایسه با بک اند از نظر فنی ساده تر است. زیرا بک اند مهارت‌های بیشتری مانند مدیریت داده، امنیت و… نیاز دارد اما بخش فرانت اند معمولا با بخش های طراحی و
                  خلاقیت سروکار دارد.
               </p>
               <p className=" text-gray-color dark:!text-text-gray-color">
                  پس اگر عاشق چالش و سختی هستید بک اند می‌تواند هدف خوبی برای شما باشد و اگر دنبال مسیر ساده هستید فرانت اند بدون شک قدم بعدی شماست.
               </p>
               <h3 className=" text-3xl danaBold">نتیجه گیری</h3>
               <p className=" text-gray-color dark:!text-text-gray-color">
                  در این مقاله <strong className=" text-white dark:!text-black danaBold">بک اند و فرانت اند</strong> را به طور کامل به شما توضیح دادیم و کارایی و درجه سختی و میزان درآمد آن‌ها را نیز
                  به طور کامل فهمیدیم؛ با این اطلاعات احتمالا بتوانید انتخاب مناسبی داشته باشید. هرگونه سوال و یا ابهامی هم اگر داشتید در بخش کامنت ها بپرسید.
               </p>
            </div>
         </div>
      </div>
   );
}
