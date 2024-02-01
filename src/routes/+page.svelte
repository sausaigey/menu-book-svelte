<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=true>
  <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500&display=swap" rel="stylesheet">
</head>

<body>
  <div class="appbar">Kongkow Cafe</div>
  <div class="hero"><img src="https://cdn.themistakenman.com/wp-content/uploads/2022/08/fast-food-business.webp"
      alt="hero"></div>
  <div class="header-text">
    <div class="tagline">Friends, Food, Fun</div>
    <div class="document-title">Kongkow Cafe Menu 2023</div>
    <div class="price-note">All prices are in thousand rupiah</div>
  </div>
  <div class="menu-area">
    <div class="menu-row">
      <div class="menu-tile">
        <div class="menu-photo">
          <img
            src="https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg?resize=960%2C503"
            alt="salad">
        </div>
        <div class="menu-tile-name">Avocado Pesto Salad</div>
        <div class="menu-tile-description">
          “Home-grown vegetables with loads of avocado, topped with mouthwatering pesto salad”
        </div>
        <div class="menu-price-row">
          <span class="price-description"></span>
          <span>35</span>
        </div>
        <div class="menu-price-row">
          <span class="price-description">+ Grilled Salmon</span>
          <span>55</span>
        </div>
      </div>
      <div class="menu-tile">
        <div class="menu-photo">
          <img src="https://www.recipetineats.com/wp-content/uploads/2023/05/Garlic-cheese-pizza_9.jpg" alt="pizza">
        </div>
        <div class="menu-tile-name">Triple Cheese Pizza</div>
        <div class="menu-tile-description">
          “Indulge yourself in this simple yet delicious delicacy”
        </div>
        <div class="menu-price-row">
          <span class="price-description">1 Slice</span>
          <span>15</span>
        </div>
        <div class="menu-price-row">
          <span class="price-description">Pan (6 slices)</span>
          <span>60</span>
        </div>
      </div>
    </div>
    <div class="menu-row">
      <div class="menu-tile">
        <div class="menu-photo">
          <img
            src="https://images.theconversation.com/files/525691/original/file-20230511-19-w9pz4k.jpg?ixlib=rb-1.1.0&rect=5%2C2%2C1905%2C1276&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"
            alt="wine">
        </div>
        <div class="menu-tile-name">Seasonal Wine</div>
        <div class="menu-tile-description">
          “A great meal becomes perfect when combined with a good wine”
        </div>
        <div class="menu-price-row">
          <span class="price-description">Glass</span>
          <span>100</span>
        </div>
        <div class="menu-price-row">
          <span class="price-description">Bottle</span>
          <span>1500</span>
        </div>
      </div>
      <div class="menu-tile">
        <div class="menu-photo">
          <img
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_512,h_512/https://www.adityabirlacapital.com/healthinsurance/active-together/wp-content/uploads/2019/12/How-Are-Espressos-Good-For-Health_blog-1.gif"
            alt="coffee">
        </div>
        <div class="menu-tile-name">Coffee</div>
        <div class="menu-tile-description">
          “The best coffee you can have from the land of Indonesia”
        </div>
        <div class="menu-price-row">
          <span class="price-description">Americano</span>
          <span>25</span>
        </div>
        <div class="menu-price-row">
          <span class="price-description">Latte</span>
          <span>30</span>
        </div>
      </div>
    </div>
  </div>
</body>

<style>
  /** CSS Reset */
  *,
  html,
  body {
    font-family: 'Barlow';
    margin: 0;
    padding: 0;
    color: #424242;
  }

  body {
    background-color: white;
  }

  div.appbar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 16px;
    background-color: #f44336;
    color: white;
    font-size: 16px;
    font-weight: 500;
  }

  div.hero img {
    aspect-ratio: 2;
    width: 100%;
    object-fit: cover;
  }

  div.header-text {
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div.tagline {
    font-size: 28px;
  }

  div.document-title {
    font-size: 16px;
    font-weight: 500;
  }

  div.price-note {
    font-size: 12px;
    margin-top: 8px;
  }

  div.menu-area {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  div.menu-row {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }

  div.menu-tile {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-bottom: 16px;
  }

  div.menu-photo img {
    aspect-ratio: 1;
    object-fit: cover;
    max-width: 100%;
  }

  div.menu-tile-name {
    font-weight: 500;
    font-size: 16px;
    padding: 8px 16px;
    align-self: stretch;
    text-align: center;
  }

  div.menu-tile-description {
    font-size: 12px;
    align-self: stretch;
    text-align: center;
    padding: 0px 16px;
    height: 60px;
    padding-bottom: 16px;
  }

  div.menu-price-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
  }

  span.price-description {
    font-size: 12px;
  }

  @media (min-width: 800px) {
    div.menu-area {
      flex-direction: row;
    }

    div.menu-row {
      flex: 1;
    }
  }
</style>