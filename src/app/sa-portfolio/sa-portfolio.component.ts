import { Component, OnInit } from '@angular/core';

interface PotfolioItems {
  id: string;
  imgSrc: string;
  modalTitle: string;
  modalDesc: string;
}

@Component({
  selector: 'sa-portfolio',
  templateUrl: './sa-portfolio.component.html',
  styleUrls: ['./sa-portfolio.component.css'],
})
export class SaPortfolioComponent implements OnInit {
  portfolioItems: PotfolioItems[] = [
    {
      id: 'cabin',
      imgSrc: '../../assets/images/portfolio/cabin.png',
      modalTitle: 'LOG CABIN',
      modalDesc:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.',
    },

    {
      id: 'cake',
      imgSrc: '../../assets/images/portfolio/cake.png',
      modalTitle: 'TASTY CAKE',
      modalDesc:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.',
    },

    {
      id: 'circus',
      imgSrc: '../../assets/images/portfolio/circus.png',
      modalTitle: 'CIRCUS TENT',
      modalDesc:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.',
    },

    {
      id: 'game',
      imgSrc: '../../assets/images/portfolio/game.png',
      modalTitle: 'CONTROLLER',
      modalDesc:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.',
    },

    {
      id: 'safe',
      imgSrc: '../../assets/images/portfolio/safe.png',
      modalTitle: 'LOCKED SAFE',
      modalDesc:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.',
    },

    {
      id: 'submarine',
      imgSrc: '../../assets/images/portfolio/submarine.png',
      modalTitle: 'SUBMARINE',
      modalDesc:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
