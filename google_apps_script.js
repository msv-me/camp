// ============================================================
//  GOOGLE APPS SCRIPT — Communication Camp Registration
// ============================================================
//
//  SETUP INSTRUCTIONS (follow these steps once):
//
//  1. Go to https://sheets.google.com and create a new Google Sheet
//
//  2. In row 1, add these headers (one per column, A through H):
//       A: Timestamp
//       B: Parent First Name
//       C: Parent Last Name
//       D: Email
//       E: Phone
//       F: Child First Name
//       G: Child Last Name
//       H: School Year
//
//  3. In the Google Sheet, go to Extensions → Apps Script
//
//  4. Delete any existing code in the editor, and paste EVERYTHING
//     below the "PASTE START" line into the Apps Script editor.
//
//  5. Click the save icon (💾) or press Ctrl+S / Cmd+S
//
//  6. Click "Deploy" → "New deployment"
//       - Click the gear icon next to "Select type" → choose "Web app"
//       - Description: "Camp Registration"
//       - Execute as: "Me" (your Google account)
//       - Who has access: "Anyone"
//       - Click "Deploy"
//
//  7. You may be asked to authorize the script:
//       - Click "Authorize access"
//       - Choose your Google account
//       - If you see "Google hasn't verified this app", click
//         "Advanced" → "Go to Camp Registration (unsafe)"
//       - Click "Allow"
//
//  8. Copy the Web app URL (it looks like:
//     https://script.google.com/macros/s/XXXXX/exec)
//
//  9. Open register.html and replace YOUR_GOOGLE_APPS_SCRIPT_URL_HERE
//     with the URL you just copied.
//
//  That's it! Form submissions will now appear in your Google Sheet.
//
//  SHARING: To share the Sheet with someone, click the "Share" button
//  in the top right of the Google Sheet and add their email address.
//
// ============================================================

// ==================== PASTE START ====================

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),              // Timestamp
      data.parentFirst || '',  // Parent First Name
      data.parentLast || '',   // Parent Last Name
      data.email || '',        // Email
      data.phone || '',        // Phone
      data.childFirst || '',   // Child First Name
      data.childLast || '',    // Child Last Name
      data.schoolYear || ''    // School Year
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ==================== PASTE END ====================
