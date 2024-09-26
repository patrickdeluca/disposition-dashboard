const dispositionsData = [
  {
    "id": 1,
    "name": "In Queue",
    "description": "Use this disposition for text/chat leads that do not respond back in a timely fashion. Does not affect call cadence.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 2,
    "name": "Appointment Set",
    "description": "Auto disposition when a call ends with an appointment successfully set. Notification sent to customer and dealership of appt date/time.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 3,
    "name": "Appointment Reschedule",
    "description": "Auto disposition when an appointment is rescheduled. Notification sent to caller and dealership of appt reschedule date/time.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 4,
    "name": "Appointment With No Date",
    "description": "Auto Disposition from Not Ready Button: Used for customers unwilling to commit to a specific date/time. Application sent to dealership as is; customer sent dealership's information.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 5,
    "name": "Appointment Confirmed",
    "description": "Used if a customer calls after an appt is set and needs additional information. Keeps the lead in 'Appointment Set' status without resending alerts.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 6,
    "name": "Appointment Showed",
    "description": "Used if a customer showed for appointment but dealer marked it as a no show. Keeps the lead in 'Appointment Set' status without resending alerts.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 7,
    "name": "Check with Spouse",
    "description": "Auto Disposition from Not Ready Button: To be used if someone needs to check with their significant other or schedule before setting appt. Requires follow-up scheduled.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 8,
    "name": "Check Schedule",
    "description": "Auto disposition from the NOT READY button",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 9,
    "name": "Scheduled Call Back",
    "description": "Used for customers who need us to call them back at a later date/time. Requires follow-up scheduled.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 10,
    "name": "Dealership In Contact",
    "description": "Used if the customer states they are already working with our dealership. Customer's name and phone number should still be obtained/verified. Application sent to dealership as is.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 11,
    "name": "Application Complete",
    "description": "Used if we have completed the application process and are submitting it to BAMA underwriting dept for approval. Sends the lead to BAMA underwriting for approval.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 12,
    "name": "Approval Notification Complete",
    "description": "Used if we have completed the approval notification process and collected credit card information for application fee. Sends the lead to BAMA underwriting for payment processing.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 13,
    "name": "Credit Approved - Waiting on Vehicle Inventory",
    "description": "Auto disposition whenever a customer is approved for program",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 14,
    "name": "Interested Without Appointment",
    "description": "Interested Without Appointment",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 15,
    "name": "Customer Will Call Dealership",
    "description": "Customer will call dealership back directly",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 16,
    "name": "Customer Has a Question About Program",
    "description": "Use this dispo for a customer that had a general question",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 17,
    "name": "No Reply Needed",
    "description": "",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 18,
    "name": "Serviced Elsewhere",
    "description": "The customer has their vehicle serviced somewhere else other than the dealership.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 19,
    "name": "Engaged",
    "description": "Lead has initiated contact via SMS",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 20,
    "name": "Customer Needs Transportation",
    "description": "Auto Disposition from Not Ready Button: Used for customers who say they do not have a way to the dealership. Application sent to dealership as is; customer sent dealership's information.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 21,
    "name": "Customer Distance From Dealership is a Factor",
    "description": "Auto Disposition from Not Ready Button: Used for customers who state that the dealership is too far away. Application sent to dealership as is; customer sent dealership's information.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 22,
    "name": "Other",
    "description": "Auto Disposition from Not Ready Button: Used when a customer wants to speak with the dealer/dealership before committing to an appt for any reason other than listed options. Note customer's reason. Application sent as is.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 23,
    "name": "Approval before I come in",
    "description": "Auto Disposition from Not Ready Button: Used for customers who want an approval or specific numbers (interest rate/down payment) before going into the dealership. Application sent to dealership as is; customer sent info.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 24,
    "name": "Had a bad experience with Dealer",
    "description": "Auto Disposition from Not Ready Button: Used when the customer states they or someone they know had a bad experience with the dealership. Note customer's concerns. Application sent to dealership as is; customer sent info.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 25,
    "name": "Specific Vehicle",
    "description": "Auto Disposition from Not Ready Button: Used when a customer questions inventory because they are looking for something specific. Note what vehicle/type in NOTES section. Application sent to dealership as is; customer sent info.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 26,
    "name": "Customer Has a Question About Program",
    "description": "Use this dispo for a customer that had a general question",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 27,
    "name": "Prefers to Sell to Private Party",
    "description": "Prefers to Sell to Private Party",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 28,
    "name": "Customer Interested in Gift Card or Prize Only",
    "description": "Used if the caller is only interested in the prize",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 29,
    "name": "In the Market at a Future Date",
    "description": "Used if the customer says they are not looking to buy until a future date (further than 30 days out). Note should give a time frame",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 30,
    "name": "Under Age of 21",
    "description": "",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 31,
    "name": "Checking Status of Application",
    "description": "Used if we have completed the application process and customer calls back because they have not heard if they are approved or denied from underwriting yet. Notifies us that customer is still waiting for approval status.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 32,
    "name": "Uber ID Not Found",
    "description": "Used if we searched by email and/or phone number and were not able to find the Uber ID.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 33,
    "name": "Out of State License",
    "description": "Used if the driver has a current driver's license different from the state they are currently living/driving in",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 34,
    "name": "Need Landlord/Mortgage Info",
    "description": "Used when the customer does not have the contact information to verify with the landlord/mortgage holder. Customer needs to call back with that information to complete the application for submission.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 35,
    "name": "Need Employer Phone Number",
    "description": "Used when the customer does not have their employer's phone number. Customer needs to call back with that information to complete the application for submission.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 36,
    "name": "Address Doesn't Match Driver's License",
    "description": "Used if the lead is in PA or GA and the address on their driver's license doesn't match their home address.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 37,
    "name": "Event Ended",
    "description": "Caller called in to make an appointment after event has ended.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 38,
    "name": "Needs to Check Schedule",
    "description": "Customer will call back to make an appointment.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 39,
    "name": "Outside Financing",
    "description": "",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 40,
    "name": "Recall Already Fixed",
    "description": "The recall was previously completed.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 41,
    "name": "Inquiry - No Info Gathered",
    "description": "Used if a customer calls in but only has questions and is unwilling to give basic information needed to send application to dealership. Marks as cold lead resulting in no further calls and dealer not receiving this lead.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 42,
    "name": "No longer interested",
    "description": "",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 43,
    "name": "Customer Services Vehicle Elsewhere",
    "description": "Customer services vehicle at a different location",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 44,
    "name": "Opt Out",
    "description": "Used if the customer specifically says 'Take me off your list' or 'Opt me out'. Collect mailer number to verify name on mailer. Inform caller of Opt out number on the bottom of the mailer. Marks as cold lead resulting in no further calls and dealer not receiving this lead.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 45,
    "name": "Credit Denied",
    "description": "Auto disposition used when the driver's application processed by underwriting has been denied.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 46,
    "name": "No Answer",
    "description": "OUTBOUND DISPOSITION: Used when a dialed number just rings or drops without any voicemail message or option to leave a message. Causes auto follow up call based on the current status of the outbound call cycle.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 47,
    "name": "Left Voicemail",
    "description": "OUTBOUND DISPOSITION: Used when a message is left on a voicemail or answering machine. Causes auto follow up call based on the current status of the outbound call cycle.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 48,
    "name": "Left Message With Someone Else",
    "description": "OUTBOUND DISPOSITION: Used when we leave a message with a live person who stated customer is not available. Requires a scheduled callback time. Call cycle placed on hold until scheduled follow-up call is made.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 49,
    "name": "Temporarily Disconnected Number",
    "description": "OUTBOUND DISPOSITION: Used if the number called has temporarily been disconnected or is not in service. Automatically schedules a callback for 48 hours. If still disconnected",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 50,
    "name": "Voicemail Box Not Set Up Yet Or Full",
    "description": "OUTBOUND DISPOSITION: Used if a voicemail cannot be left because the voicemail box has not been set up yet. Causes auto follow up call based on the current status of the outbound call cycle.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 51,
    "name": "Customer Accidentally Dialed Us",
    "description": "Used for an active lead where the customer says 'Sorry - I called the wrong number!' or pocket calls us. Keeps the lead in its current outbound call cycle status and disposition.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 52,
    "name": "No Message Left",
    "description": "OUTBOUND DISPOSITION: Used on the 2nd/3rd/4th call of the day after a message has already been left. We only leave one message per phone number listed per day. Causes auto follow up call based on the current status of the outbound call cycle.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 53,
    "name": "Voicemail",
    "description": "OUTBOUND DISPOSITION: Used when a message is left on a voicemail or answering machine. Causes auto follow up call based on the current status of the outbound call cycle.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 54,
    "name": "Gift Card Redemption",
    "description": "Used when a lead calls in to redeem their gift card because the dealer did not do it.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 55,
    "name": "No Dealer",
    "description": "Auto disposition that occurs if we do not currently have a dealer in the caller's local area. Marks as cold lead resulting in no further calls and dealer not receiving this lead.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 56,
    "name": "Inbound Dropped Call",
    "description": "Used if an inbound call drops during the call for any reason. Always assume the call dropped. Note the account of current status of application/call and that call dropped. Moves lead to top of Outgoing Work queue for follow-up.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 57,
    "name": "Need Spanish Speaking Agent",
    "description": "Used for a customer who needs a Spanish speaking agent. Flags this lead as a Spanish lead and moves it to Outgoing work for Spanish queue to follow up.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 58,
    "name": "Queued Call Hang Up",
    "description": "Used if you answer an inbound queued call and all you hear is our hold music.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 59,
    "name": "Customer Requested Call Back From Queue",
    "description": "",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 60,
    "name": "Followup Complete",
    "description": "Used when the appointment follow-up has been completed. We have spoken with the customer",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 61,
    "name": "Scheduled Call Back",
    "description": "Used when a customer requests a call back at a later date or time to complete the appointment follow-up call. Requires a scheduled callback.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 62,
    "name": "Still in Progress With Dealer",
    "description": "Used when a customer is still actively working with the dealer to finalize their deal. Requires a scheduled callback to learn the final outcome of their interaction with the dealership.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 63,
    "name": "In Market At Future Date",
    "description": "Used for a person who does not want to reschedule as they have decided to purchase a car at a future date. Note time frame of expected purchase if possible.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 64,
    "name": "Wrong Number",
    "description": "Used for an inbound blank lead where caller was trying to reach someone other than our company. Marks as cold lead resulting in no further calls and dealer not receiving this lead.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 65,
    "name": "Not a Valid Number for Customer",
    "description": "OUTBOUND DISPOSITION: Used when we call a number listed for a customer and the number is working",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 66,
    "name": "Disconnected Number",
    "description": "OUTBOUND DISPOSITION: Used if a number listed for a customer is not a working number. Marks as Invalid lead resulting in no further calls",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 67,
    "name": "Number Does not Accept Incoming Calls",
    "description": "OUTBOUND DISPOSITION: Used when we call a number listed for a customer and get the automated message 'At the subscriber's request",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 68,
    "name": "Did Not Fill Out Any Online Application",
    "description": "PRIMARILY USED ON OUTBOUND CALLS. Used for the customer who states they are not in the market for a vehicle and did not fill out any form of online application. Marks as Invalid lead resulting in no further calls and dealer not receiving application.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 69,
    "name": "Blocked Number",
    "description": "PRIMARILY USED ON OUTBOUND CALLS. Used for the customer whose phone number is blocked.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 70,
    "name": "Personal Loan",
    "description": "Used for the customer who thinks they are applying for anything other than a car loan such as a personal loan or payday loan. Also used for customers who filled out an online application but thought it was for something else. Marks as cold lead resulting in no further calls and dealer not receiving this lead.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 71,
    "name": "Credit Card Inquiry",
    "description": "Used for the customer who thinks they are applying for anything other than a car loan such as a personal loan or payday loan. Also used for customers who filled out an online application but thought it was for something else. Marks as cold lead resulting in no further calls and dealer not receiving this lead.",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  },
  {
    "id": 72,
    "name": "Just Bought a Car",
    "description": "PRIMARILY USED ON OUTBOUND CALLS. Used for the customer who states they did submit an application online",
    "enabled": true,
    "contactOn": true,
    "dripCampaign": false,
    "dripCampaignUUID": "",
    "actions": []
  }
];

module.exports = dispositionsData;
