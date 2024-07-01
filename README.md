# Coupon Generator

Coupon Generator is a web application that allows users to create and download custom coupons with organization details, discount/deal information, and expiry dates.

## Features

- **Input Form**: Collects information such as Organization Name, Discount/Deal Description, and Expiry Date.
- **Preview**: Displays a preview of the coupon as the user fills out the form.
- **Download**: Allows users to download the generated coupon as a PNG file.
- **Validation**: Basic validation ensures all required fields are filled out and prevents setting expiry dates in the past.

## Technologies Used

- **HTML**: Structuring the web page.
- **CSS**: Styling the elements for a better user interface.
- **JavaScript**: Handling form submission, validation, and dynamic content updates.
- **html2canvas**: Library used to capture the coupon preview and convert it into a downloadable image.

## Setup Instructions

1. Clone the repository:

```
git clone https://github.com/codingwithveer18/coupon-generator.git
```
2. Open `index.html` in a web browser.

## Usage

1. Fill out the form with your organization's details, discount/deal description, and expiry date.
2. Click on "Generate Coupon" to preview the coupon.
3. Verify the details in the preview.
4. Click on "Download Coupon" to save the generated coupon as a PNG file.