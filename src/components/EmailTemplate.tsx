import "~/styles/globals.css";

type EmailTemplateProps = {
  studentName: string;
  amountPaid: string;
  dateOfPayment: string;
  paymentMethod: string;
};

export default function EmailTemplate({
  studentName,
  amountPaid,
  dateOfPayment,
  paymentMethod,
}: EmailTemplateProps) {
  return (
    <div>
      <p>Dear {studentName},</p>
      <p>
        We are writing to confirm that we have received your payment for the
        fees at Magic Beats Music Academy. Thank you for your prompt payment.
      </p>
      <p>Here are the details of your payment:</p>
      <ul>
        <li>Name: {studentName}</li>
        <li>Amount Paid: {amountPaid}</li>
        <li>Date of Payment: {dateOfPayment}</li>
        <li>Payment Method: {paymentMethod}</li>
      </ul>
      <p>
        Please keep this email as your receipt for the payment. If you have any
        questions or concerns, please do not hesitate to contact us.
      </p>
      <p>Best regards,</p>
      <p>Magic Beats</p>
    </div>
  );
}
