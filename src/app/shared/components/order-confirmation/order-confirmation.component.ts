import { Component } from '@angular/core';
import { DataCommunications } from 'src/app/core/services/datacommunications.service';
import { OverlayService } from 'src/app/core/services/overlay.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss'],
})
export class OrderConfirmationComponent {
  constructor(
    private dataCommunication: DataCommunications,
    private overlayService: OverlayService
  ) {}
  onConfirm() {
    this.dataCommunication.isOrderConfirm.next(true);
    this.overlayService.closeDialog.next(true);
  }
  onCancel() {
    this.dataCommunication.isOrderConfirm.next(false);
  }
}
