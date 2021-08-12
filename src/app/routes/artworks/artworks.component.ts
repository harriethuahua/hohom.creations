import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-artworks',
  templateUrl: './artworks.component.html',
  styleUrls: ['./artworks.component.scss']
})
export class ArtworksComponent {
  public categories = [
    { src: 'assets/0802-2.jpg', title: '鑰匙圈', key: 'category_1' },
    { src: 'assets/0802-2.jpg', title: '書籤', key: 'category_2'  },
    { src: 'assets/0802-2.jpg', title: '吊飾', key: 'category_3'  },
  ]
  public categorySelect = this.categories[0];
  public artworks = {
    'category_1': [
      { src: 'assets/0730-3.jpg', title: 'Seashell', description: '2021-07-30', price: 380 },
      { src: 'assets/0730-2.jpg', title: 'Key Chain', description: '2021-07-30', price: 580 },
    ],
    'category_2': [
      { src: 'assets/0730-3.jpg', title: 'Seashell', description: '2021-07-30', price: 380 },
      { src: 'assets/0730-2.jpg', title: 'Key Chain', description: '2021-07-30', price: 580 },
    ],
    'category_3': [
      { src: 'assets/0730-3.jpg', title: 'Seashell', description: '2021-07-30', price: 380 },
      { src: 'assets/0730-2.jpg', title: 'Key Chain', description: '2021-07-30', price: 580 },
    ],
  };
  public artSelect = this.artworks['category_1'][0];
  // public artworks = [
  //   {
  //     src: require('@/assets/0802-2.jpg'),
  //     title: 'Lava Lava',
  //     description: '2021-08-02',
  //   },
  //   {
  //     src: require('@/assets/0802.jpg'),
  //     title: 'Archimedes',
  //     description: '2021-08-02',
  //   },
  //   {
  //     src: require('@/assets/0730-3.jpg'),
  //     title: 'Seashell',
  //     description: '2021-07-30',
  //   },
  //   {
  //     src: require('@/assets/0730-2.jpg'),
  //     title: 'Key Chain',
  //     description: '2021-07-30',
  //   },
  //   {
  //     src: require('@/assets/0730.jpg'),
  //     title: 'Frame',
  //     description: '2021-07-30',
  //   },
  //   {
  //     src: require('@/assets/0729-3.jpg'),
  //     title: 'Seashell',
  //     description: '2021-07-29',
  //   },
  //   {
  //     src: require('@/assets/0729-2.jpg'),
  //     title: 'Coaster',
  //     description: '2021-07-29',
  //   },
  //   {
  //     src: require('@/assets/0729.jpg'),
  //     title: 'Frame',
  //     description: '2021-07-29',
  //   },
  //   {
  //     src: require('@/assets/0728-2.jpg'),
  //     title: 'Seashell',
  //     description: '2021-07-28',
  //   },
  //   {
  //     src: require('@/assets/0728.jpg'),
  //     title: 'Stella',
  //     description: '2021-07-28',
  //   },
  //   {
  //     src: require('@/assets/0726.jpg'),
  //     title: 'Coaster',
  //     description: '2021-07-26',
  //   },
  //   {
  //     src: require('@/assets/0723-2.jpg'),
  //     title: 'Bookmark',
  //     description: '2021-07-23',
  //   },
  //   {
  //     src: require('@/assets/0723.jpg'),
  //     title: 'Melody',
  //     description: '2021-07-23',
  //   },
  //   {
  //     src: require('@/assets/0721.jpg'),
  //     title: 'Frame',
  //     description: '2021-07-21',
  //   },
  //   {
  //     src: require('@/assets/0720.jpg'),
  //     title: 'Circus',
  //     description: '2021-07-20',
  //   },
  //   {
  //     src: require('@/assets/0719.jpg'),
  //     title: 'Bookmarks',
  //     description: '2021-07-19',
  //   },
  //   {
  //     src: require('@/assets/0718.jpg'),
  //     title: 'Coaster',
  //     description: '2021-07-18',
  //   },
  //   {
  //     src: require('@/assets/0715.jpg'),
  //     title: 'Coaster',
  //     description: '2021-07-15',
  //   },
  //   {
  //     src: require('@/assets/0714-2.jpg'),
  //     title: 'Feather',
  //     description: '2021-07-14',
  //   },
  //   {
  //     src: require('@/assets/0714.jpg'),
  //     title: 'Bookmarks',
  //     description: '2021-07-14',
  //   },
  //   {
  //     src: require('@/assets/0712.jpg'),
  //     title: 'Feather',
  //     description: '2021-07-12',
  //   },
  //   {
  //     src: require('@/assets/0710.jpg'),
  //     title: 'Rainbow',
  //     description: '2021-07-10',
  //   },
  //   {
  //     src: require('@/assets/0708.jpg'),
  //     title: 'Feather',
  //     description: '2021-07-08',
  //   },
  //   {
  //     src: require('@/assets/0707.jpg'),
  //     title: 'Feather',
  //     description: '2021-07-07',
  //   },
  // ];

  constructor() {}

  ngOnInit() {
  }

  public getInitStyle() {
    let randomDelay = Math.random(),
        randomSize = Math.floor(Math.random() * ( 160 - 100 )) + 100;
    let style = {
      'animation-delay': randomDelay + 's',
      'width': randomSize + 'px',
      'height': randomSize + 'px',
    };
    return style;
  }

  public selectCategory(i: number) {
    this.categorySelect = this.categories[i];
    this.artSelect = this.artworks[this.categorySelect.key][0];
  }

}
