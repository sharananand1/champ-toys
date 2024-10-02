import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  featuredToys: any = [
    {
      id: 1,  // Unique ID for each toy
      name: 'Action Figure',
      imageUrl: 'assets/images/img_6.png',
      mrpPrice: 1000,
      discountPrice: 800,
      discountPercentage: 20
    },
    {
      id: 2,  // Unique ID for each toy
      name: 'Building Blocks',
      imageUrl: 'assets/images/img_7.png',
      mrpPrice: 120,
      discountPrice: 0,  // No discount for this item
      discountPercentage: null
    },
    {
      id: 3,  // Unique ID for each toy
      name: 'Teddy Bear',
      imageUrl: 'assets/images/img_8.png',
      mrpPrice: 1200,
      discountPrice: 900,
      discountPercentage: 25
    },
    {
      id: 4,  // Unique ID for each toy
      name: 'Remote Control Car',
      imageUrl: 'assets/images/img_9.png',
      mrpPrice: 2500,
      discountPrice: 2250,
      discountPercentage: 10
    },
    {
      id: 5,  // Unique ID for each toy
      name: 'Puzzle Game',
      imageUrl: 'assets/images/img_10.png',
      mrpPrice: 600,
      discountPrice: null,  // No discount for this item
      discountPercentage: 0
    }
  ];

  timeRemaining: string = '10:00:00';
  @ViewChild('toyCarousel', { static: false }) toyCarousel!: ElementRef; // Get a reference to the carousel element

  ngOnInit(): void {
    // this.startTimer();
  }

  scrollToLeft() {
    if (this.toyCarousel && this.toyCarousel.nativeElement) {
      this.toyCarousel.nativeElement.scrollTo({
        left: this.toyCarousel.nativeElement.scrollLeft - 300,
        behavior: 'smooth'
      });
    }
  }

  scrollToRight() {
    if (this.toyCarousel && this.toyCarousel.nativeElement) {
      this.toyCarousel.nativeElement.scrollTo({
        left: this.toyCarousel.nativeElement.scrollLeft + 300,
        behavior: 'smooth'
      });
    }
  }

/*  startTimer() {
    const endTime = new Date('2024-12-31T23:59:59').getTime();
    const timerInterval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeLeft = endTime - currentTime;

      if (timeLeft < 0) {
        clearInterval(timerInterval);
        this.timeRemaining = 'EXPIRED';
        return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      this.timeRemaining = `${days}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
  }*/
}
