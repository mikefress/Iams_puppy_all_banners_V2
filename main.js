const myBanners = [
  'IAMS_Puppy_v2_Celebrations_and_Connections_1_160x600',
  'IAMS_Puppy_v2_Celebrations_and_Connections_1_300x250',
  'IAMS_Puppy_v2_Celebrations_and_Connections_1_300x50',
  'IAMS_Puppy_v2_Celebrations_and_Connections_1_300x600',
  'IAMS_Puppy_v2_Celebrations_and_Connections_1_320x480',
  'IAMS_Puppy_v2_Celebrations_and_Connections_1_320x50',
  'IAMS_Puppy_v2_Celebrations_and_Connections_1_728x90',
  'IAMS_Puppy_v2_Celebrations_and_Connections_1_970x250',
  'IAMS_Puppy_v2_Celebrations_and_Connections_2_160x600',
  'IAMS_Puppy_v2_Celebrations_and_Connections_2_300x250',
  'IAMS_Puppy_v2_Celebrations_and_Connections_2_300x50',
  'IAMS_Puppy_v2_Celebrations_and_Connections_2_300x600',
  'IAMS_Puppy_v2_Celebrations_and_Connections_2_320x480',
  'IAMS_Puppy_v2_Celebrations_and_Connections_2_320x50',
  'IAMS_Puppy_v2_Celebrations_and_Connections_2_728x90',
  'IAMS_Puppy_v2_Celebrations_and_Connections_2_970x250',
  'IAMS_Puppy_v2_Celebrations_and_Connections_5_160x600',
  'IAMS_Puppy_v2_Celebrations_and_Connections_5_300x250',
  'IAMS_Puppy_v2_Celebrations_and_Connections_5_300x50',
  'IAMS_Puppy_v2_Celebrations_and_Connections_5_300x600',
  'IAMS_Puppy_v2_Celebrations_and_Connections_5_320x480',
  'IAMS_Puppy_v2_Celebrations_and_Connections_5_320x50',
  'IAMS_Puppy_v2_Celebrations_and_Connections_5_728x90',
  'IAMS_Puppy_v2_Celebrations_and_Connections_5_970x250',
  'IAMS_Puppy_v2_Choosing_First_Food_1_160x600',
  'IAMS_Puppy_v2_Choosing_First_Food_1_300x250',
  'IAMS_Puppy_v2_Choosing_First_Food_1_300x50',
  'IAMS_Puppy_v2_Choosing_First_Food_1_300x600',
  'IAMS_Puppy_v2_Choosing_First_Food_1_320x480',
  'IAMS_Puppy_v2_Choosing_First_Food_1_320x50',
  'IAMS_Puppy_v2_Choosing_First_Food_1_728x90',
  'IAMS_Puppy_v2_Choosing_First_Food_1_970x250',
  'IAMS_Puppy_v2_Choosing_First_Food_2_160x600',
  'IAMS_Puppy_v2_Choosing_First_Food_2_300x250',
  'IAMS_Puppy_v2_Choosing_First_Food_2_300x50',
  'IAMS_Puppy_v2_Choosing_First_Food_2_300x600',
  'IAMS_Puppy_v2_Choosing_First_Food_2_320x480',
  'IAMS_Puppy_v2_Choosing_First_Food_2_320x50',
  'IAMS_Puppy_v2_Choosing_First_Food_2_728x90',
  'IAMS_Puppy_v2_Choosing_First_Food_2_970x250',
  'IAMS_Puppy_v2_Healthy_Solutions_1_160x600',
  'IAMS_Puppy_v2_Healthy_Solutions_1_300x250',
  'IAMS_Puppy_v2_Healthy_Solutions_1_300x50',
  'IAMS_Puppy_v2_Healthy_Solutions_1_300x600',
  'IAMS_Puppy_v2_Healthy_Solutions_1_320x480',
  'IAMS_Puppy_v2_Healthy_Solutions_1_320x50',
  'IAMS_Puppy_v2_Healthy_Solutions_1_728x90',
  'IAMS_Puppy_v2_Healthy_Solutions_1_970x250',
  'IAMS_Puppy_v2_Healthy_Solutions_5_160x600',
  'IAMS_Puppy_v2_Healthy_Solutions_5_300x250',
  'IAMS_Puppy_v2_Healthy_Solutions_5_300x50',
  'IAMS_Puppy_v2_Healthy_Solutions_5_300x600',
  'IAMS_Puppy_v2_Healthy_Solutions_5_320x480',
  'IAMS_Puppy_v2_Healthy_Solutions_5_320x50',
  'IAMS_Puppy_v2_Healthy_Solutions_5_728x90',
  'IAMS_Puppy_v2_Healthy_Solutions_5_970x250',
  'IAMS_Puppy_v2_Healthy_Solutions_8_160x600',
  'IAMS_Puppy_v2_Healthy_Solutions_8_300x250',
  'IAMS_Puppy_v2_Healthy_Solutions_8_300x50',
  'IAMS_Puppy_v2_Healthy_Solutions_8_300x600',
  'IAMS_Puppy_v2_Healthy_Solutions_8_320x480',
  'IAMS_Puppy_v2_Healthy_Solutions_8_320x50',
  'IAMS_Puppy_v2_Healthy_Solutions_8_728x90',
  'IAMS_Puppy_v2_Healthy_Solutions_8_970x250',
  'IAMS_Puppy_v2_Parity_Brands_1_160x600',
  'IAMS_Puppy_v2_Parity_Brands_1_300x250',
  'IAMS_Puppy_v2_Parity_Brands_1_300x50',
  'IAMS_Puppy_v2_Parity_Brands_1_300x600',
  'IAMS_Puppy_v2_Parity_Brands_1_320x480',
  'IAMS_Puppy_v2_Parity_Brands_1_320x50',
  'IAMS_Puppy_v2_Parity_Brands_1_728x90',
  'IAMS_Puppy_v2_Parity_Brands_1_970x250',
  'IAMS_Puppy_v2_Plugged_In_and_Sporty_1_160x600',
  'IAMS_Puppy_v2_Plugged_In_and_Sporty_1_300x250',
  'IAMS_Puppy_v2_Plugged_In_and_Sporty_1_300x50',
  'IAMS_Puppy_v2_Plugged_In_and_Sporty_1_300x600',
  'IAMS_Puppy_v2_Plugged_In_and_Sporty_1_320x480',
  'IAMS_Puppy_v2_Plugged_In_and_Sporty_1_320x50',
  'IAMS_Puppy_v2_Plugged_In_and_Sporty_1_728x90',
  'IAMS_Puppy_v2_Plugged_In_and_Sporty_1_970x250',
  'IAMS_Puppy_v2_Plugged_In_and_Sporty_3_160x600',
  'IAMS_Puppy_v2_Plugged_In_and_Sporty_3_300x250',
  'IAMS_Puppy_v2_Plugged_In_and_Sporty_3_300x50',
  'IAMS_Puppy_v2_Plugged_In_and_Sporty_3_300x600',
  'IAMS_Puppy_v2_Plugged_In_and_Sporty_3_320x480',
  'IAMS_Puppy_v2_Plugged_In_and_Sporty_3_320x50',
  'IAMS_Puppy_v2_Plugged_In_and_Sporty_3_728x90',
  'IAMS_Puppy_v2_Plugged_In_and_Sporty_3_970x250',
  'IAMS_Puppy_v2_Plugged_In_and_Sporty_4_160x600',
  'IAMS_Puppy_v2_Plugged_In_and_Sporty_4_300x250',
  'IAMS_Puppy_v2_Plugged_In_and_Sporty_4_300x50',
  'IAMS_Puppy_v2_Plugged_In_and_Sporty_4_300x600',
  'IAMS_Puppy_v2_Plugged_In_and_Sporty_4_320x480',
  'IAMS_Puppy_v2_Plugged_In_and_Sporty_4_320x50',
  'IAMS_Puppy_v2_Plugged_In_and_Sporty_4_728x90',
  'IAMS_Puppy_v2_Plugged_In_and_Sporty_4_970x250',
  'IAMS_Puppy_v2_Puppy_Health_Issues_2_160x600',
  'IAMS_Puppy_v2_Puppy_Health_Issues_2_300x250',
  'IAMS_Puppy_v2_Puppy_Health_Issues_2_300x50',
  'IAMS_Puppy_v2_Puppy_Health_Issues_2_300x600',
  'IAMS_Puppy_v2_Puppy_Health_Issues_2_320x480',
  'IAMS_Puppy_v2_Puppy_Health_Issues_2_320x50',
  'IAMS_Puppy_v2_Puppy_Health_Issues_2_728x90',
  'IAMS_Puppy_v2_Puppy_Health_Issues_2_970x250',
  'IAMS_Puppy_v2_Puppy_Health_Issues_3_160x600',
  'IAMS_Puppy_v2_Puppy_Health_Issues_3_300x250',
  'IAMS_Puppy_v2_Puppy_Health_Issues_3_300x50',
  'IAMS_Puppy_v2_Puppy_Health_Issues_3_300x600',
  'IAMS_Puppy_v2_Puppy_Health_Issues_3_320x480',
  'IAMS_Puppy_v2_Puppy_Health_Issues_3_320x50',
  'IAMS_Puppy_v2_Puppy_Health_Issues_3_728x90',
  'IAMS_Puppy_v2_Puppy_Health_Issues_3_970x250',
  'IAMS_Puppy_v2_Puppy_Health_issues_1_160x600',
  'IAMS_Puppy_v2_Puppy_Health_issues_1_300x250',
  'IAMS_Puppy_v2_Puppy_Health_issues_1_300x50',
  'IAMS_Puppy_v2_Puppy_Health_issues_1_300x600',
  'IAMS_Puppy_v2_Puppy_Health_issues_1_320x480',
  'IAMS_Puppy_v2_Puppy_Health_issues_1_320x50',
  'IAMS_Puppy_v2_Puppy_Health_issues_1_728x90',
  'IAMS_Puppy_v2_Puppy_Health_issues_1_970x250',
  'IAMS_Puppy_v2_Puppy_Large_Breed_1_160x600',
  'IAMS_Puppy_v2_Puppy_Large_Breed_1_300x250',
  'IAMS_Puppy_v2_Puppy_Large_Breed_1_300x50',
  'IAMS_Puppy_v2_Puppy_Large_Breed_1_300x600',
  'IAMS_Puppy_v2_Puppy_Large_Breed_1_320x480',
  'IAMS_Puppy_v2_Puppy_Large_Breed_1_320x50',
  'IAMS_Puppy_v2_Puppy_Large_Breed_1_728x90',
  'IAMS_Puppy_v2_Puppy_Large_Breed_1_970x250',
  'IAMS_Puppy_v2_Puppy_Large_Breed_2_160x600',
  'IAMS_Puppy_v2_Puppy_Large_Breed_2_300x250',
  'IAMS_Puppy_v2_Puppy_Large_Breed_2_300x50',
  'IAMS_Puppy_v2_Puppy_Large_Breed_2_300x600',
  'IAMS_Puppy_v2_Puppy_Large_Breed_2_320x480',
  'IAMS_Puppy_v2_Puppy_Large_Breed_2_320x50',
  'IAMS_Puppy_v2_Puppy_Large_Breed_2_728x90',
  'IAMS_Puppy_v2_Puppy_Large_Breed_2_970x250',
  'IAMS_Puppy_v2_Puppy_Small_Breed_2_160x600',
  'IAMS_Puppy_v2_Puppy_Small_Breed_2_300x250',
  'IAMS_Puppy_v2_Puppy_Small_Breed_2_300x50',
  'IAMS_Puppy_v2_Puppy_Small_Breed_2_300x600',
  'IAMS_Puppy_v2_Puppy_Small_Breed_2_320x480',
  'IAMS_Puppy_v2_Puppy_Small_Breed_2_320x50',
  'IAMS_Puppy_v2_Puppy_Small_Breed_2_728x90',
  'IAMS_Puppy_v2_Puppy_Small_Breed_2_970x250',
  'IAMS_Puppy_v2_Puppy_Small_breed_1_160x600',
  'IAMS_Puppy_v2_Puppy_Small_breed_1_300x250',
  'IAMS_Puppy_v2_Puppy_Small_breed_1_300x50',
  'IAMS_Puppy_v2_Puppy_Small_breed_1_300x600',
  'IAMS_Puppy_v2_Puppy_Small_breed_1_320x480',
  'IAMS_Puppy_v2_Puppy_Small_breed_1_320x50',
  'IAMS_Puppy_v2_Puppy_Small_breed_1_728x90',
  'IAMS_Puppy_v2_Puppy_Small_breed_1_970x250',
  'IAMS_Puppy_v2_Switching_from_breeder_food_1_160x600',
  'IAMS_Puppy_v2_Switching_from_breeder_food_1_300x250',
  'IAMS_Puppy_v2_Switching_from_breeder_food_1_300x50',
  'IAMS_Puppy_v2_Switching_from_breeder_food_1_300x600',
  'IAMS_Puppy_v2_Switching_from_breeder_food_1_320x480',
  'IAMS_Puppy_v2_Switching_from_breeder_food_1_320x50',
  'IAMS_Puppy_v2_Switching_from_breeder_food_1_728x90',
  'IAMS_Puppy_v2_Switching_from_breeder_food_1_970x250',
  'IAMS_Puppy_v2_Trade_Down_1_160x600',
  'IAMS_Puppy_v2_Trade_Down_1_300x250',
  'IAMS_Puppy_v2_Trade_Down_1_300x50',
  'IAMS_Puppy_v2_Trade_Down_1_300x600',
  'IAMS_Puppy_v2_Trade_Down_1_320x480',
  'IAMS_Puppy_v2_Trade_Down_1_320x50',
  'IAMS_Puppy_v2_Trade_Down_1_728x90',
  'IAMS_Puppy_v2_Trade_Down_1_970x250',
  'IAMS_Puppy_v2_Trade_Down_2_160x600',
  'IAMS_Puppy_v2_Trade_Down_2_300x250',
  'IAMS_Puppy_v2_Trade_Down_2_300x50',
  'IAMS_Puppy_v2_Trade_Down_2_300x600',
  'IAMS_Puppy_v2_Trade_Down_2_320x480',
  'IAMS_Puppy_v2_Trade_Down_2_320x50',
  'IAMS_Puppy_v2_Trade_Down_2_728x90',
  'IAMS_Puppy_v2_Trade_Down_2_970x250',
  'IAMS_Puppy_v2_Trade_Up_1_160x600',
  'IAMS_Puppy_v2_Trade_Up_1_300x250',
  'IAMS_Puppy_v2_Trade_Up_1_300x50',
  'IAMS_Puppy_v2_Trade_Up_1_300x600',
  'IAMS_Puppy_v2_Trade_Up_1_320x480',
  'IAMS_Puppy_v2_Trade_Up_1_320x50',
  'IAMS_Puppy_v2_Trade_Up_1_728x90',
  'IAMS_Puppy_v2_Trade_Up_1_970x250',
  'IAMS_Puppy_v2_Trade_Up_2_160x600',
  'IAMS_Puppy_v2_Trade_Up_2_300x250',
  'IAMS_Puppy_v2_Trade_Up_2_300x50',
  'IAMS_Puppy_v2_Trade_Up_2_300x600',
  'IAMS_Puppy_v2_Trade_Up_2_320x480',
  'IAMS_Puppy_v2_Trade_Up_2_320x50',
  'IAMS_Puppy_v2_Trade_Up_2_728x90',
  'IAMS_Puppy_v2_Trade_Up_2_970x250'
];

const myRefs = [];


function loadReferencesBanners(e) {
  const bannerHolder = document.getElementById('bannerHolder')
  bannerHolder.replaceChildren()
  const mainTitle = document.createElement('h2');
  mainTitle.innerText = e.srcElement.textContent;
  bannerHolder.append(mainTitle)
  

  for (const banner of myBanners) {
    if (banner.includes(e.srcElement.textContent)) {
      const sectionTitle = banner.replace('IAMS_Puppy_v2_', '').replace('_160x600', '');
      const title1 = document.createElement('a');
      title1.innerText = '160x600'
      title1.setAttribute('href', `./banners/${banner}/index.html`)
      title1.setAttribute('target', '_blank')
      bannerHolder.append(title1)
      const iframe1 = document.createElement('iframe')
      iframe1.setAttribute('width', 160)
      iframe1.setAttribute('height', 600)
      iframe1.setAttribute('frameborder', 0)
      iframe1.setAttribute('src', `./banners/${banner}/index.html?cacheBuster=${Date.now()}${Math.floor(Math.random() * 1000)}`)
      bannerHolder.append(iframe1)
      // 300x50
      const title2 = document.createElement('a');
      title2.innerText = '300x50'
      title2.setAttribute('href', `./banners/IAMS_Puppy_v2_${sectionTitle}_300x50/index.html`)
      title2.setAttribute('target', '_blank')
      bannerHolder.append(title2)
      const iframe2 = document.createElement('iframe')
      iframe2.setAttribute('width', 300)
      iframe2.setAttribute('height', 50)
      iframe2.setAttribute('frameborder', 0)
      iframe2.setAttribute('src', `./banners/IAMS_Puppy_v2_${sectionTitle}_300x50/index.html?cacheBuster=${Date.now()}${Math.floor(Math.random() * 1000)}`)
      bannerHolder.append(iframe2)
      // 320x50
      const title3 = document.createElement('a');
      title3.innerText = '320x50'
      title3.setAttribute('href', `./banners/IAMS_Puppy_v2_${sectionTitle}_320x50/index.html`)
      title3.setAttribute('target', '_blank')
      bannerHolder.append(title3)
      const iframe3 = document.createElement('iframe')
      iframe3.setAttribute('width', 320)
      iframe3.setAttribute('height', 50)
      iframe3.setAttribute('frameborder', 0)
      iframe3.setAttribute('src', `./banners/IAMS_Puppy_v2_${sectionTitle}_320x50/index.html?cacheBuster=${Date.now()}${Math.floor(Math.random() * 1000)}`)
      bannerHolder.append(iframe3)
      // 300x250
      const title4 = document.createElement('a');
      title4.innerText = '300x250'
      title4.setAttribute('href', `./banners/IAMS_Puppy_v2_${sectionTitle}_300x250/index.html`)
      title4.setAttribute('target', '_blank')
      bannerHolder.append(title4)
      const iframe4 = document.createElement('iframe')
      iframe4.setAttribute('width', 300)
      iframe4.setAttribute('height', 250)
      iframe4.setAttribute('frameborder', 0)
      iframe4.setAttribute('src', `./banners/IAMS_Puppy_v2_${sectionTitle}_300x250/index.html?cacheBuster=${Date.now()}${Math.floor(Math.random() * 1000)}`)
      bannerHolder.append(iframe4)
      // 300x600
      const title5 = document.createElement('a');
      title5.innerText = '300x600'
      title5.setAttribute('href', `./banners/IAMS_Puppy_v2_${sectionTitle}_300x600/index.html`)
      title5.setAttribute('target', '_blank')
      bannerHolder.append(title5)
      const iframe5 = document.createElement('iframe')
      iframe5.setAttribute('width', 300)
      iframe5.setAttribute('height', 600)
      iframe5.setAttribute('frameborder', 0)
      iframe5.setAttribute('src', `./banners/IAMS_Puppy_v2_${sectionTitle}_300x600/index.html?cacheBuster=${Date.now()}${Math.floor(Math.random() * 1000)}`)
      bannerHolder.append(iframe5)
      // 320x480
      const title6 = document.createElement('a');
      title6.innerText = '320x480'
      title6.setAttribute('href', `./banners/IAMS_Puppy_v2_${sectionTitle}_320x480/index.html`)
      title6.setAttribute('target', '_blank')
      bannerHolder.append(title6)
      const iframe6 = document.createElement('iframe')
      iframe6.setAttribute('width', 320)
      iframe6.setAttribute('height', 480)
      iframe6.setAttribute('frameborder', 0)
      iframe6.setAttribute('src', `./banners/IAMS_Puppy_v2_${sectionTitle}_320x480/index.html?cacheBuster=${Date.now()}${Math.floor(Math.random() * 1000)}`)
      bannerHolder.append(iframe6)
      // 728x90
      const title7 = document.createElement('a');
      title7.innerText = '728x90'
      title7.setAttribute('href', `./banners/IAMS_Puppy_v2_${sectionTitle}_728x90/index.html`)
      title7.setAttribute('target', '_blank')
      bannerHolder.append(title7)
      const iframe7 = document.createElement('iframe')
      iframe7.setAttribute('width', 728)
      iframe7.setAttribute('height', 90)
      iframe7.setAttribute('frameborder', 0)
      iframe7.setAttribute('src', `./banners/IAMS_Puppy_v2_${sectionTitle}_728x90/index.html?cacheBuster=${Date.now()}${Math.floor(Math.random() * 1000)}`)
      bannerHolder.append(iframe7)
      // 970x250
      const title8 = document.createElement('a');
      title8.innerText = '970x250'
      title8.setAttribute('href', `./banners/IAMS_Puppy_v2_${sectionTitle}_970x250/index.html`)
      title8.setAttribute('target', '_blank')
      bannerHolder.append(title8)
      const iframe8 = document.createElement('iframe')
      iframe8.setAttribute('width', 970)
      iframe8.setAttribute('height', 250)
      iframe8.setAttribute('frameborder', 0)
      iframe8.setAttribute('src', `./banners/IAMS_Puppy_v2_${sectionTitle}_970x250/index.html?cacheBuster=${Date.now()}${Math.floor(Math.random() * 1000)}`)
      bannerHolder.append(iframe8)
      break;
    }
  }
}


function init() {
  for (const banner of myBanners) {
    if (banner.endsWith('160x600')) {
      const section = document.createElement('section');
      section.classList.add('section');
      const title = document.createElement('h4');
      title.classList.add('title');
      const sectionTitle = banner.replace('IAMS_Puppy_v2_', '').replace('_160x600', '');
      title.innerText = sectionTitle;
      section.append(title)
      document.getElementById('refHolder').append(section)
      const bannerHolder = document.createElement('div')
      bannerHolder.classList.add('bannerHolder');
      bannerHolder.classList.add(sectionTitle)
      section.append(bannerHolder)
      title.addEventListener('click', loadReferencesBanners)
    }
  }
}
  