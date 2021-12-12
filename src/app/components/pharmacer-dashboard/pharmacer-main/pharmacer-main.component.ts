import { AfterViewChecked, Component, OnInit } from '@angular/core';
declare let paypal: any;
@Component({
  selector: 'app-pharmacer-main',
  templateUrl: './pharmacer-main.component.html',
  styleUrls: ['./pharmacer-main.component.css'],
})
export class PharmacerMainComponent implements AfterViewChecked {
  addScript: boolean = false;
  finalAmount: number = 1;

  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox:
        'ASV8RKeof7CFrr0VhXiu-50xLBsu6EhXCavQE9_hzvq_-d3x4flBhU6j_l_ssiWIgHJYhEWhYyiLLQvG',
      production:
        'EE5UoDIZFtGw5ldbADOB5Bu5SIvjpMY65vRMZGMDkluHRkNPQhSAQyU9qUYLKkjAH1GoXnBFIdRSWrCy',
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            {
              amount: {
                total: this.finalAmount,
                currency: 'USD',
              },
            },
          ],
        },
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        console.log('sussecc');
      });
    },
  };

  constructor() {}
  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, 'paypal-checkout-btn');
      });
    }
  }
  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');
      scripttagElement.src = 'http://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    });
  }
  gg() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(function (postion) {
        console.log(postion);
      });
    else console.log('not supported');
  }

  ngOnInit(): void {}
}
