import axios from "axios";
import BASE_URL from "../base/BaseUrl";
import { decryptId, encryptId } from "../utils/encyrption/Encyrption";



/*--------------------------Master-start----------------------------------- */
// CHAPTER 
export const CHAPTER_LIST = `${BASE_URL}/api/fetch-chapters`;
export const ADD_CHAPTER_SUMBIT = `${BASE_URL}/api/create-chapter`;
// (view)-- add school pending 
export const CHAPTER_VIEW_BY_ID = `${BASE_URL}/api/fetch-chapter-by-id`;
export const CHAPTER_VIEW_CREATE_USER = `${BASE_URL}/api/create-user`;
export const CHAPTER_VIEW_UPDATE_USER = `${BASE_URL}/api/update-user`;
//(edit)
export const CHAPTER_EDIT_BY_ID = `${BASE_URL}/api/fetch-chapter-by-id`;
export const CHAPTER_EDIT_BY_ID_UPDATE = `${BASE_URL}/api/update-chapter`;
export const CHAPTER_EDIT_STATES_DROPDOWN = `${BASE_URL}/api/fetch-states`;
// (datasource)
export const CHAPTER_DATASOURCE_BY_ID_LIST = `${BASE_URL}/api/fetch-data-sources-by-id`;
export const CHAPTER_DATASOURCE_CREATE = `${BASE_URL}/api/create-datasources`;
export const CHAPTER_DATASOURCE_UPDATE_BY_ID = `${BASE_URL}/api/update-datasources`;



//STATES

export const STATES_LIST = `${BASE_URL}/api/fetch-states`;
export const CREATE_STATES = `${BASE_URL}/api/create-states`;
export const UPDATES_STATES = `${BASE_URL}/api/update-states`;

//DESIGNATION

export const DESIGNATION_LIST = `${BASE_URL}/api/fetch-designation`;
export const CREATE_DESIGNATION = `${BASE_URL}/api/create-designation`;
export const UPDATES_DESIGNATION = `${BASE_URL}/api/update-designation`;

//EXPENSIVE_TYPE

export const EXPENSIVE_TYPE_LIST = `${BASE_URL}/api/fetch-ots-exptypes`;
export const CREATE_EXPENSIVE_TYPE = `${BASE_URL}/api/create-ots-exptypes`;
export const UPDATES_EXPENSIVE_TYPE = `${BASE_URL}/api/update-ots-exptypes`;

//FAQ

export const FAQ_LIST = `${BASE_URL}/api/fetch-faqs`;
export const CREATE_FAQ = `${BASE_URL}/api/create-faqs`;
export const UPDATES_FAQ = `${BASE_URL}/api/update-faqs`;


/*--------------------------Master-end----------------------------------- */


/*--------------------------Donor-start----------------------------------- */
//FULL LIST
export const DONOR_LIST = `${BASE_URL}/api/fetch-donors`;
// export const DONOR_LIST_CREATE_RECEIPT = `${BASE_URL}/api/create-receipt`;



export const DONOR_LIST_CREATE_RECEIPT = `${BASE_URL}/api/create-receipt-olds`;












export const DONOR_LIST_CREATE_RECEIPT_FETCH = `${BASE_URL}/api/fetch-donor-by-id`;
export const DONOR_VIEW_DATA = `${BASE_URL}/api/fetch-donor-by-id`;
export const DONOR_VIEW_OLD_RECEIPT_LIST = `${BASE_URL}/api/fetch-receipts-by-old-id`;
export const DONATION_DETAILS_LIST = `${BASE_URL}/api/fetch-donor-receipt-by-id`;
export const MEMBERSHIP_DETAILS_LIST = `${BASE_URL}/api/fetch-donor-receipt-by-id`;
export const FAMILY_DETAILS_LIST = `${BASE_URL}/api/fetch-donor-by-id`;
export const COMPANY_DETAILS_LIST = `${BASE_URL}/api/fetch-donor-by-id`;
export const DONOR_INDIVISUAL_CREATE_SUMBIT = `${BASE_URL}/api/create-donor`;
export const DONOR_COMPANY_CREATE_SUMBIT = `${BASE_URL}/api/create-donor`;
export const DONOR_COMPANY_UPDATE_SUMBIT = `${BASE_URL}/api/update-donor/`;
export const DONOR_INDIVISUAL_UPDATE_SUMBIT = `${BASE_URL}/api/update-donor/`;
export const DONOR_INDIVISUAL_FAMILY_GROUP_UPDATE = `${BASE_URL}/api/update-donor/`;
export const DONOR_COMPANY_FAMILY_GROUP_UPDATE = `${BASE_URL}/api/update-donor/`;
export const DONOR_COMPANY_EDIT_FETCH = `${BASE_URL}/api/fetch-donor-for-edit`;
export const DONOR_INDIVISUAL_EDIT_FETCH = `${BASE_URL}/api/fetch-donor-for-edit`;
// pending 


//MEMBERS
export const MEMBERS_LIST = `${BASE_URL}/api/fetch-members`;
export const SEND_EMAIL = `${BASE_URL}/api/send-membership-renew?id=`;


//VIEWVER
export const VIEWVER_LIST = `${BASE_URL}/api/superadmin-get-all-viewers`;
export const VIEWVER_CREATE = `${BASE_URL}/api/superadmin-add-a-viewer`;
export const VIEWVER_EDIT_BY_ID = `${BASE_URL}/api/fetch-viewer-by-id`;
export const VIEWVER_EDIT_UPDATE = `${BASE_URL}/api/update-viewer`;


//DUPLICATE
export const DUPLICATE_LIST = `${BASE_URL}/api/fetch-donors-duplicate`;
export const DUPLICATE_DELETE = `${BASE_URL}/api/update-donors-duplicate-by-id/`;
export const DUPLICATE_EDIT_BY_ID = `${BASE_URL}/api/fetch-donors-duplicate-by-id`;
export const DUPLICATE_EDIT_BY_ID_UPDATE = `${BASE_URL}/api/update-donors-duplicate`;



/*--------------------------Donor-end----------------------------------- */




/*--------------------------Reciept-start----------------------------------- */
export const RECEIPT_LIST = `${BASE_URL}/api/fetch-receipts`;
export const RECEIPT_OLD_LIST = `${BASE_URL}/api/fetch-receipts-old`;
export const RECEIPT_SUSPENSE_LIST = `${BASE_URL}/api/fetch-suspense-list`;
export const RECEIPT_SUSPENSE_UPDATE = `${BASE_URL}/api/update-suspense-receipt`;
// (edit)
export const RECEIPT_EDIT_BY_ID_DONOR_DATA = `${BASE_URL}/api/fetch-donor-by-id`;

export const RECEIPT_EDIT_BY_ID = `${BASE_URL}/api/fetch-receipt-by-id`;
export const RECEIPT_EDIT_OLD_BY_ID = `${BASE_URL}/api/fetch-receipt-by-old-id`;



export const RECEIPT_EDIT_BY_ID_UPDATE = `${BASE_URL}/api/update-receipt`;
export const RECEIPT_EDIT_BY_ID_OLD_UPDATE = `${BASE_URL}/api/update-receipt-old`;
// (view) 
export const RECEIPT_VIEW_BY_ID = `${BASE_URL}/api/fetch-receipt-by-id`;

export const RECEIPT_OLD_VIEW_BY_ID = `${BASE_URL}/api/fetch-receipt-by-old-id`;

export const RECEIPT_VIEW_THREE_BY_ID = `${BASE_URL}/api/fetch-receipt-by-id`;
export const RECEIPT_VIEW_SEND_EMAIL = `${BASE_URL}/api/send-receipt?id=`;
export const RECEIPT_VIEW_SUMBIT = `${BASE_URL}/api/update-donor-email`;


/*--------------------------Reciept-end----------------------------------- */




/*--------------------------School-start(student)----------------------------------- */
//FULL LIST
export const SCHOOL_ALLOTED_LIST = `${BASE_URL}/api/fetch-school-alloted-list`;
export const SCHOOL_COUNT_CHAPTERWISE_LIST = `${BASE_URL}/api/fetch-school-count-chapterwise`;
export const SCHOOL_VIEW_BY_ID = `${BASE_URL}/api/fetch-schools-by-id`;

//REPEAT DONOR
export const REAPEAT_DONOR_LIST = `${BASE_URL}/api/fetch-receipt-duplicate`;
export const REAPEAT_DONOR_Edit_LIST = `${BASE_URL}/api/fetch-school-allot-repeat`;
export const REAPEAT_DONOR_Edit_UPDATE_NEXT = `${BASE_URL}/api/update-schoolsallot-repeat`;




//SCHOOL ALLOT
export const SCHOOL_ALLOT_LIST = `${BASE_URL}/api/fetch-school-allot`;
export const SCHOOL_ALLOT_VIEW_LIST = `${BASE_URL}/api/fetch-schoolsallotview-by-id`;
export const SCHOOL_ALLOT_LETTER = `${BASE_URL}/api/fetch-schoolsallot-receipt-by-id`;
// (school edit pending )





//SCHOOL TO ALLOT
export const SCHOOL_TO_ALOT_LIST = `${BASE_URL}/api/fetch-ots`;
// (DONOR DETAILS )
export const SCHOOL_DATA_BY_ID = `${BASE_URL}/api/fetch-schoolsallotdonor-by-id/`;
export const SCHOOL_ALLOT_YEAR_BY_YEAR = `${BASE_URL}/api/fetch-school-allot-year-by-year`;
export const SCHOOL_DONOR_DETAILS_ALLOTED_LIST = `${BASE_URL}/api/fetch-school-alloted-list`;
export const DONOR_DETAILS_SUMBIT = `${BASE_URL}/api/create-school-alot`;

/*--------------------------School-end----------------------------------- */




/*--------------------------Dashboard-start----------------------------------- */

export const DASHBOARD_YEAR = `${BASE_URL}/api/fetch-year`;
export const DASHBOARD_SUPERADMIN_NOTICE = `${BASE_URL}/api/superadmin-fetch-notices`;
export const DASHBOARD_USER_NOTICE = `${BASE_URL}/api/user-fetch-notices`;
export const DASHBOARD_DATA = `${BASE_URL}/api/fetch-dashboard-data-by`;
export const DASHBOARD_MARK_NOTICE_AS_READ = `${BASE_URL}/api/user-mark-a-notice-as-read?notice_id=`;
/*--------------------------Dashboard-end----------------------------------- */




/*--------------------------Report-start----------------------------------- */
//10DBDOCUMENTS
export const DB_DOCUMENT_DOWNLOAD = `${BASE_URL}/api/download-receipt-year`;
export const DB_DOCUMENT_VIEW = `${BASE_URL}/api/fetch-donor-receipt-by-year`;
export const DB_DOCUMENT_DOWNLOAD_NO_PAN = `${BASE_URL}/api/download-receipt-year-no-pan`;
export const DB_DOCUMENT_VIEW_NO_PAN = `${BASE_URL}/api/fetch-donor-receipt-by-year-no-pan`;
export const DB_DOCUMENT_DOWNLOAD_GROUP = `${BASE_URL}/api/download-receipt-year-group`;
export const DB_DOCUMENT_VIEW_GROUP = `${BASE_URL}/api/fetch-donor-receipt-group-by-year`;

//DONATION SUMMARY
export const DONATION_SUMMARY_DOWNLOAD = `${BASE_URL}/api/download-donation-summary`;
export const DONATION_SUMMARY_VIEW = `${BASE_URL}/api/fetch-donationsummary-by-id`;




//DONOR SUMMARY
export const DONOR_SUMMARY_VIEW = `${BASE_URL}/api/fetch-donorsummary-by-id`;
export const DONOR_SUMMARY_DOWNLOAD = `${BASE_URL}/api/download-donor-summary`;
export const DONOR_SUMMARY_GROUP_VIEW = `${BASE_URL}/api/fetch-donorgroupsummary-by-id`;
export const DONOR_SUMMARY_GROUP_DOWNLOAD = `${BASE_URL}/api/download-donor-groupsummary`;
export const DONOR_SUMMARY_FETCH_DONOR = `${BASE_URL}/api/fetch-donors`;



//PAYMENT SUMMARY
export const PAYMENT_SUMMARY_VIEW = `${BASE_URL}/api/fetch-teacher-payment-summary-by-date`;
export const PAYMENT_SUMMARY_DOWNLOAD = `${BASE_URL}/api/download-teacher-payment-summary-by-date`;



//PROMOTER SUMMARY
export const PROMOTER_SUMMARY_DOWNLOAD = `${BASE_URL}/api/download-promoter-summary`;
export const PROMOTER_SUMMARY_DROPDOWN = `${BASE_URL}/api/fetch-promoter`;
export const PROMOTER_SUMMARY_VIEW = `${BASE_URL}/api/fetch-promotersummary-by-id`;



//RECEIPT SUMMARY
export const RECEIPT_SUMMARY_DOWNLOAD = `${BASE_URL}/api/download-receipt-summary`;
export const RECEIPT_SUMMARY_VIEW = `${BASE_URL}/api/fetch-receiptsummary-by-id`;


//SCHOOL SUMMARY
export const SUMMARY_DOWNLOAD = `${BASE_URL}/api/download-school-summary`;
export const SUMMARY_SOURCE_DROPDOWN = `${BASE_URL}/api/fetch-school-allot-year-donor`;
export const SUMMARY_VIEW = `${BASE_URL}/api/fetch-schoolsallot-receipt-by-id`;

//SUSPENSE SUMMARY
export const SUSPENSE_SUMMARY_DOWNLOAD = `${BASE_URL}/api/download-receipt-suspense-summary`;
export const SUSPENSE_SUMMARY_VIEW = `${BASE_URL}/api/fetch-receipt-suspense-summary`;


/*--------------------------Report-end----------------------------------- */






/*--------------------------Download-start----------------------------------- */
//DONOR
export const DOWNLOAD_DONOR = `${BASE_URL}/api/download-donor`;
//DOWNLOAD ALL RECEIPT
export const DOWNLOAD_ALL_RECEIPT = `${BASE_URL}/api/download-receipt-all`;
export const DOWNLOAD_DROPDOWN_DATASOURCE = `${BASE_URL}/api/fetch-datasource`;
export const DOWNLOAD_DROPDOWN_CHAPTER = `${BASE_URL}/api/fetch-chapters`;
export const DOWNLOAD_DROPDOWN_PROMOTER = `${BASE_URL}/api/fetch-promoter`;

// DOWNLOAD PURCHASE(OTS)
export const DOWNLOAD_PURCHASE_OTS = `${BASE_URL}/api/download-ots`;
//DOWNLOAD RECEIPTS
export const DOWNLOAD_RECEIPT = `${BASE_URL}/api/download-receipt`;
export const DOWNLOAD_RECEIPT_DROPDOWN_DATASOURCE = `${BASE_URL}/api/fetch-datasource`;
//DOWNLOAD TEAM
export const DOWNLOAD_TEAM = `${BASE_URL}/api/download-team-summary`;
//SCHOOL
export const DOWNLOAD_SCHOOL_ALLOTED = `${BASE_URL}/api/download-school-alloted`;
export const DOWNLOAD_SCHOOL_UNALLOTED = `${BASE_URL}/api/download-school-unalloted`;

/*--------------------------Download-end----------------------------------- */




/*--------------------------Other-start----------------------------------- */
//FAQ
export const OTHER_FAQ = `${BASE_URL}/api/fetch-faqs`;
export const OTHER_FAQ_DOWNLOAD = `${BASE_URL}/api/download-faq`;

//TEAM
export const OTHER_TEAM_DESIGNATION_DROPDOWN = `${BASE_URL}/api/fetch-designation`;
export const OTHER_TEAM_COMMITTEE_DROPDOWN = `${BASE_URL}/api/fetch-committee-date`;
export const OTHER_TEAM_CREATE = `${BASE_URL}/api/create-committee`;
export const OTHER_TEAM_MEMBER_SELECT_LIST = `${BASE_URL}/api/fetch-ind-donors`;
export const OTHER_TEAM_COMMITTEE_LIST = `${BASE_URL}/api/fetch-commitee`;
export const OTHER_TEAM_COMMITTEE_DELETE = `${BASE_URL}/api/delete-commitee`;
export const OTHER_TEAM_COMMITTEE_CREATE_IMAGE = `${BASE_URL}/api/create-committee-image`;



//NOTIFICATION
export const OTHER_NOTIFICATION_SUPERADMIN = `${BASE_URL}/api/superadmin-fetch-notices`;
export const OTHER_NOTIFICATION_USER = `${BASE_URL}/api/user-fetch-notices`;
export const OTHER_NOTIFICATION_MARK_AS_READ = `${BASE_URL}/api/user-mark-a-notice-as-read?notice_id=`;
export const OTHER_NOTIFICATION_SUMBIT_NOTICE = `${BASE_URL}/api/superadmin-add-notice`;
/*--------------------------Other-end----------------------------------- */




/*--------------------------Receipt-Super-start----------------------------------- */

export const RECEIPT_SUPER_LIST = `${BASE_URL}/api/fetch-receipts-zero-list`;
export const RECEIPT_SUPER_DIALOG_LIST = `${BASE_URL}/api/fetch-receipts-zero`;
export const RECEIPT_SUPER_SUMBIT = `${BASE_URL}/api/update-receipts-zero-by-id`;

/*--------------------------Recceipt-Super-end----------------------------------- */




/*--------------------------Chapter-start(admin)----------------------------------- */

export const ADMIN_CHAPTER_DATA_CHAPTER_LIST = `${BASE_URL}/api/fetch-chapter-by-id`;
export const ADMIN_CHAPTER_CREATE = `${BASE_URL}/api/create-user`;
export const ADMIN_CHAPTER_EDIT_UPDATE = `${BASE_URL}/api/update-user`;
export const ADMIN_CHAPTER_UPDATE = `${BASE_URL}/api/update-chapter/`;

export const ADMIN_CHAPTER_SCHOOL_VIEW_CHAPTER = `${BASE_URL}/api/fetch-chapters`;


export const ADMIN_CHAPTER_SCHOOL_VIEW_DATA = `${BASE_URL}/api/fetch-viewer-by-id`;
export const ADMIN_CHAPTER_SCHOOL_UPDATE = `${BASE_URL}/api/update-school`;



/*--------------------------Chapter-end(admin)----------------------------------- */



/*--------------------------Datasource-start(admin)----------------------------------- */
export const ADMIN_DATASOURCE_CREATE = `${BASE_URL}/api/create-datasource`;
export const ADMIN_DATASOURCE_LIST = `${BASE_URL}/api/fetch-datasource`;
export const ADMIN_DATASOURCE_UPDATE = `${BASE_URL}/api/update-datasource`;

/*--------------------------Datasource-end(admin)----------------------------------- */








// ROUTE CONFIGURATION 

export const ROUTES = {
    ADMIN_SCHOOL_VIEW: (id) => `/chapter/view-shool/${encryptId(id)}`,
    CHAPTER_VIEW: (id) => `/view-chapter/${encryptId(id)}`,
    CHAPTER_EDIT: (id) => `/edit-chapter/${encryptId(id)}`,
    CHAPTER_DATASOURCE: (id) => `/edit-datasource/${encryptId(id)}`,
    CHAPTER_VIEW_SCHOOL: (id) => `/view-school/${encryptId(id)}`,
    RECEIPT_VIEW: (id) => `/view-receipts/${encryptId(id)}`,
    RECEIPT_OLD_VIEW: (id) => `/view-old-receipts/${encryptId(id)}`,

    RECEIPT_EDIT: (id) => `/receipt-edit/${encryptId(id)}`,
    RECEIPT_OLD_EDIT: (id) => `/receipt-old-edit/${encryptId(id)}`,


    SCHOOL_FULL_LIST_VIEW: (id) => `/students-full-list-view/${encryptId(id)}`,
    REPEAT_DONOR_EDIT: (id) => `/repeat-donor-allot/${encryptId(id)}`,
    SCHOOL_ALLOT_EDIT: (id) => `/students-allotedit/${encryptId(id)}`,
    VIEWER_EDIT: (id) => `/edit-viewer/${encryptId(id)}`,
    DUPLICATE_EDIT: (id) => `/duplicate-edit/${encryptId(id)}`,
    DONOR_LIST_EDIT: (id) => `/donor-edit/${encryptId(id)}`,
    DONOR_LIST_REDIRECT_CREATE_RECEIPT: (id) => `/donor-create/${encryptId(id)}`,
    VIEWER_RECEIPTS_FROM_CREATE_RECEIPT: (id) => `/view-receipts/${encryptId(id)}`,
    VIEWER_RECEIPTS_FROM_OLD_RECEIPT: (id) => `/view-receipts/${encryptId(id)}`,
   
  };


export const navigateToAdminSchoolView = (navigate, viewId) => {
    navigate(ROUTES.ADMIN_SCHOOL_VIEW(viewId));
  };
export const navigateToChapterView = (navigate, viewId) => {
    navigate(ROUTES.CHAPTER_VIEW(viewId));
  };
export const navigateToChapterEdit = (navigate, editId) => {
    navigate(ROUTES.CHAPTER_EDIT(editId));
  };
export const navigateToChapterDatasource = (navigate, dataId) => {
    navigate(ROUTES.CHAPTER_DATASOURCE(dataId));
  };
export const navigateToChapterViewSchool = (navigate, viewId) => {
    navigate(ROUTES.CHAPTER_VIEW_SCHOOL(viewId));
  };
export const navigateToReceiptView = (navigate, viewId) => {
    navigate(ROUTES.RECEIPT_VIEW(viewId));
  };
  
export const navigateToOldReceiptView = (navigate, viewId) => {
    navigate(ROUTES.RECEIPT_OLD_VIEW(viewId));
  };


  
export const navigateToReceiptEdit = (navigate, viewId) => {
    navigate(ROUTES.RECEIPT_EDIT(viewId));
  };

export const navigateToOldReceiptEdit = (navigate, viewId) => {
    navigate(ROUTES.RECEIPT_OLD_EDIT(viewId));
  };




export const navigateToSchoolFullListView = (navigate, viewId) => {
    navigate(ROUTES.SCHOOL_FULL_LIST_VIEW(viewId));
  };
export const navigateToRepeatDonorEdit = (navigate, viewId) => {
    navigate(ROUTES.REPEAT_DONOR_EDIT(viewId));
  };
export const navigateToSchoolAllotEdit = (navigate, viewId) => {
    navigate(ROUTES.SCHOOL_ALLOT_EDIT(viewId));
  };
export const navigateToViewerEdit = (navigate, viewId) => {
    navigate(ROUTES.VIEWER_EDIT(viewId));
  };
export const navigateToDuplicateEdit = (navigate, viewId) => {
    navigate(ROUTES.DUPLICATE_EDIT(viewId));
  };
export const navigateToCreateReceipt = (navigate, viewId) => {
    navigate(ROUTES.DONOR_LIST_REDIRECT_CREATE_RECEIPT(viewId));
  };
export const navigateToViewReceiptFromCreateReceipt = (navigate, viewId) => {
    navigate(ROUTES.VIEWER_RECEIPTS_FROM_CREATE_RECEIPT(viewId));
  };
export const navigateToViewReceiptFromOldReceipt = (navigate, viewId) => {
    navigate(ROUTES.VIEWER_RECEIPTS_FROM_OLD_RECEIPT(viewId));
  };
export const navigateToDonorEdit = (navigate, viewId) => {
    navigate(ROUTES.DONOR_LIST_EDIT(viewId));
  };










  export const fetchAdminSchoolViewById = async (encryptedId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No authentication token found");
    
      const id = decryptId(encryptedId);
      const response = await axios.get(`${ADMIN_CHAPTER_SCHOOL_VIEW_DATA}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
     
      return response.data;
     
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch purchase details"
      );
    }
  };
  export const fetchChapterViewById = async (encryptedId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No authentication token found");
    
      const id = decryptId(encryptedId);
      const response = await axios.get(`${CHAPTER_VIEW_BY_ID}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
     
      return response.data;
     
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch purchase details"
      );
    }
  };
  
  export const fetchChapterEditById = async (encryptedId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No authentication token found");
    
      const id = decryptId(encryptedId);
      const response = await axios.get(`${CHAPTER_EDIT_BY_ID}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
     
      return response.data;
     
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch purchase details"
      );
    }
  };
  
  export const fetchChapterUpdateEditById = async (encryptedId,formData) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No authentication token found");
      const id = decryptId(encryptedId);
      const response = await axios.put(
        `${CHAPTER_EDIT_BY_ID_UPDATE}/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    } catch (error) {
      throw error.response?.data || error;
    }
  };



  export const fetchChapterDatasourceById = async (encryptedId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No authentication token found");
    
      const id = decryptId(encryptedId);
      const response = await axios.get(`${CHAPTER_DATASOURCE_BY_ID_LIST}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
     
      return response.data;
     
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch purchase details"
      );
    }
  };

  //RECEIPT 
  export const fetchReceiptEditById = async (encryptedId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No authentication token found");
    
      const id = decryptId(encryptedId);
      const response = await axios.get(`${RECEIPT_EDIT_BY_ID}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
     
      return response.data;
     
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch purchase details"
      );
    }
  };
  export const fetchReceiptEditOldById = async (encryptedId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No authentication token found");
    
      const id = decryptId(encryptedId);
      const response = await axios.get(`${RECEIPT_EDIT_OLD_BY_ID}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
     
      return response.data;
     
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch purchase details"
      );
    }
  };



  export const fetchReceiptEditByIdDonorData = async (encryptedId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No authentication token found");
    
      const id = decryptId(encryptedId);
      const response = await axios.get(`${RECEIPT_EDIT_BY_ID_DONOR_DATA}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
     
      return response.data;
     
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch purchase details"
      );
    }
  };
 

  export const fetchReceiptEditByIdUpdate = async (encryptedId,formData) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No authentication token found");
      const id = decryptId(encryptedId);
      const response = await axios.put(
        `${RECEIPT_EDIT_BY_ID_UPDATE}/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    } catch (error) {
      throw error.response?.data || error;
    }
  };
  export const fetchReceiptEditByIdOldUpdate = async (encryptedId,formData) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No authentication token found");
      const id = decryptId(encryptedId);
      const response = await axios.put(
        `${RECEIPT_EDIT_BY_ID_OLD_UPDATE}/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    } catch (error) {
      throw error.response?.data || error;
    }
  };
 
  export const fetchReceiptViewById = async (encryptedId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No authentication token found");
    
      const id = decryptId(encryptedId);
      const response = await axios.get(`${RECEIPT_VIEW_BY_ID}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
     
      return response.data;
     
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch purchase details"
      );
    }
  };
  export const fetchReceiptOldViewById = async (encryptedId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No authentication token found");
    
      const id = decryptId(encryptedId);
      const response = await axios.get(`${RECEIPT_OLD_VIEW_BY_ID}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
     
      return response.data;
     
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch purchase details"
      );
    }
  };
  export const fetchSchoolFullListViewById = async (encryptedId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No authentication token found");
    
      const id = decryptId(encryptedId);
      const response = await axios.get(`${SCHOOL_VIEW_BY_ID}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
     
      return response.data;
     
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch purchase details"
      );
    }
  };
  export const fetchRepeatDonorEditList = async (encryptedId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No authentication token found");
    
      const id = decryptId(encryptedId);
      const response = await axios.get(`${REAPEAT_DONOR_Edit_LIST}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
     
      return response.data;
     
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch purchase details"
      );
    }
  };
  export const fetchViewerEditById = async (encryptedId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No authentication token found");
    
      const id = decryptId(encryptedId);
      const response = await axios.get(`${VIEWVER_EDIT_BY_ID}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
     
      return response.data;
     
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch purchase details"
      );
    }
  };

  export const fetchDuplicateEditById = async (encryptedId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No authentication token found");
    
      const id = decryptId(encryptedId);
      const response = await axios.get(`${DUPLICATE_EDIT_BY_ID}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
     
      return response.data;
     
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch purchase details"
      );
    }
  };


  export const fetchDuplicateEditByIdUpdate = async (encryptedId,formData) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No authentication token found");
      const id = decryptId(encryptedId);
      const response = await axios.put(
        `${DUPLICATE_EDIT_BY_ID_UPDATE}/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    } catch (error) {
      throw error.response?.data || error;
    }
  };

  export const fetchDonorDataInCreateReceiptById = async (encryptedId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No authentication token found");
    
      const id = decryptId(encryptedId);
      const response = await axios.get(`${DONOR_LIST_CREATE_RECEIPT_FETCH}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
     
      return response.data;
     
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch purchase details"
      );
    }
  };
