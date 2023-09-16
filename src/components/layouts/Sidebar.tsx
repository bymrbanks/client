import React from "react";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <span>🎩 </span> by Mrbanks
      </div>
      <div className="sidebar__nav">
        <ul className="sidebar__nav-list">
          <li className="sidebar__nav-item active">
            <a href="#">
              <svg
                width="111"
                height="113"
                viewBox="0 0 111 113"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M106 103V48.3539C106 45.5772 104.845 42.9255 102.813 41.0337L71.1695 11.5835C62.3395 3.36544 48.6605 3.36544 39.8305 11.5835L8.18716 41.0337C6.15454 42.9255 5 45.5772 5 48.3539V103C5 105.761 7.23858 108 10 108H33C35.7614 108 38 105.761 38 103V78C38 72.4771 42.4772 68 48 68H64C69.5229 68 74 72.4771 74 78V104C74 106.209 75.7909 108 78 108H101C103.761 108 106 105.761 106 103Z"
                  stroke="white"
                  stroke-width="10"
                />
              </svg>
              <span>Home</span>
            </a>
          </li>
          <li className="sidebar__nav-item">
            <a href="#">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 4C5 3.44772 5.44772 3 6 3H18C18.5523 3 19 3.44772 19 4V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V4Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 13H10.5H13"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 10H10H12"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 7H13"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span>Reports</span>
            </a>
          </li>
          <li className="sidebar__nav-item">
            <a href="#">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 19.2679C11.3381 20.2679 12.5 20.2679 14 19.2679M18.1461 9.74521C18.1566 10.3025 18.2532 14.1869 18.8986 14.9821C19.5942 15.8393 20 15.9464 20 16.1607C20 16.375 19.4826 16.4286 19.1304 16.4286H4.86957C4.51738 16.4286 4 16.375 4 16.1607C4 15.9464 4.4058 15.8393 5.10145 14.9821C5.74683 14.1869 5.84336 10.3025 5.85395 9.74521C5.85482 9.69918 5.85493 9.65524 5.85552 9.60921C5.89573 6.50498 7 3 12 3C17 3 18.1043 6.50498 18.1445 9.60921C18.1451 9.65524 18.1452 9.69918 18.1461 9.74521Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>

              <span>Notifications</span>
            </a>
          </li>
          <li className="sidebar__nav-item">
            <a href="#">
              <svg
                width="151"
                height="151"
                viewBox="0 0 151 151"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M62 13.5C62 6.04416 68.0442 0 75.5 0C82.9558 0 89 6.04416 89 13.5V33.2204C91.5798 34.0641 94.0569 35.1347 96.4077 36.4085L110.135 22.6809C115.407 17.4089 123.955 17.4089 129.227 22.6809C134.499 27.953 134.499 36.5007 129.227 41.7728L115.215 55.7851C116.218 57.7766 117.077 59.8527 117.78 62H137.5C144.956 62 151 68.0442 151 75.5C151 82.9558 144.956 89 137.5 89H118.094C117.339 91.5039 116.373 93.9159 115.215 96.2149L129.454 110.454C134.726 115.726 134.726 124.274 129.454 129.546C124.182 134.818 115.634 134.818 110.362 129.546L96.4077 115.591C94.0569 116.865 91.5798 117.936 89 118.78V137.5C89 144.956 82.9558 151 75.5 151C68.0442 151 62 144.956 62 137.5V119.094C59.4961 118.339 57.0841 117.373 54.7851 116.215L41.5459 129.454C36.2739 134.726 27.7261 134.726 22.4541 129.454C17.182 124.182 17.182 115.634 22.4541 110.362L35.4085 97.4077C33.9709 94.7546 32.7922 91.9408 31.9063 89H13.5C6.04416 89 0 82.9558 0 75.5C0 68.0442 6.04416 62 13.5 62H32.2204C33.0641 59.4202 34.1347 56.9431 35.4085 54.5923L22.6809 41.8647C17.4089 36.5926 17.4089 28.0449 22.6809 22.7728C27.953 17.5007 36.5007 17.5007 41.7728 22.7728L54.7851 35.7851C57.0841 34.6272 59.4961 33.6606 62 32.9063V13.5ZM75 105C89.9117 105 102 92.9117 102 78C102 63.0883 89.9117 51 75 51C60.0883 51 48 63.0883 48 78C48 92.9117 60.0883 105 75 105Z"
                  fill="white"
                />
              </svg>

              <span>Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
