import React, { useContext, useEffect, useState } from "react";
import Layout from "../../../layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../../base/BaseUrl";
import moment from "moment";
import { toast } from "react-toastify";
import { Button, ButtonGroup } from "@material-tailwind/react";
import { IconArrowBack, IconInfoCircle } from "@tabler/icons-react";
import { ContextPanel } from "../../../utils/ContextPanel";
import { decryptId, encryptId } from "../../../utils/encyrption/Encyrption";
import { DONOR_LIST_CREATE_RECEIPT, fetchDonorDataInCreateReceiptById, navigateToViewReceiptFromCreateReceipt } from "../../../api";
const exemption = [
  {
    value: "80G",
    label: "80G",
  },
  {
    value: "Non 80G",
    label: "Non 80G",
  },
  {
    value: "FCRA",
    label: "FCRA",
  },
];

const pay_mode = [
  {
    value: "Cash",
    label: "Cash",
  },
  {
    value: "Cheque",
    label: "Cheque",
  },
  {
    value: "Transfer",
    label: "Transfer",
  },
  {
    value: "Others",
    label: "Others",
  },
];

const pay_mode_2 = [
  {
    value: "Cheque",
    label: "Cheque",
  },
  {
    value: "Transfer",
    label: "Transfer",
  },
  {
    value: "Others",
    label: "Others",
  },
];
const donation_type = [
  {
    value: "One Teacher School",
    label: "OTS",
  },
  {
    value: "General",
    label: "General",
  },
  {
    value: "Membership",
    label: "Membership",
  },
];
const donation_type_2 = [
  {
    value: "One Teacher School",
    label: "OTS",
  },
  {
    value: "General",
    label: "General",
  },
];

const CreateReceipt = () => {
  const { id } = useParams();
  // const decryptedId = decryptId(id);


  const navigate = useNavigate();
  

  const todayyear = new Date().getFullYear();
  const twoDigitYear = todayyear.toString().substr(-2);
  const preyear = todayyear;
  const finyear = +twoDigitYear + 1;
  const finalyear = preyear + "-" + finyear;
  const {isPanelUp } = useContext(ContextPanel);

  const [userdata, setUserdata] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [loader, setLoader] = useState(true);
  const [donor, setDonor] = useState({
    receipt_date: "2025-03-31",
    receipt_old_no: "",
    receipt_exemption_type: "",
    receipt_financial_year: "2024-25",
    schoolalot_year: "",
    receipt_total_amount: "",
    receipt_realization_date: "",
    receipt_donation_type: "",
    receipt_tran_pay_mode: "",
    receipt_tran_pay_details: "",
    receipt_remarks: "",
    receipt_reason: "",
    receipt_email_count: "",
    receipt_created_at: "",
    receipt_created_by: "",
    receipt_update_at: "",
    receipt_update_by: "",
    m_ship_vailidity: "",
    receipt_no_of_ots: "",
    donor_promoter: "",
    donor_source: "",
  });

 

  const handleButtonGroupChange = (stateName, value) => {
    setDonor((prevDonor) => ({
      ...prevDonor,
      [stateName]: value,
    }));
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("id");
    if (!isLoggedIn) {
      navigate("/");
      return;
    }
  }, []);

  const validateOnlyDigits = (inputtxt) => /^\d*$/.test(inputtxt);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    const digitFields = ["receipt_total_amount", "receipt_no_of_ots"];

    if (digitFields.includes(name)) {
      if (validateOnlyDigits(value)) {
        setDonor((prevChapter) => ({
          ...prevChapter,
          [name]: value,
        }));
      }
    } else {
      setDonor((prevChapter) => ({
        ...prevChapter,
        [name]: value,
      }));
    }
  };

 
   useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await fetchDonorDataInCreateReceiptById(id);
          setUserdata(data.individualCompany);
                setLoader(false);
        } catch (error) {
          toast.error("Failed to fetch donor data  details");
        }
      };
      
      fetchData();
    }, [id]);

  const [datasource, setDatasource] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/fetch-datasource`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setDatasource(res.data.datasource);
      });
  }, []);
  const [membershipyear, setMembershipYear] = useState([]);
  const FetchMemeberShipYear = () => {
    axios
      .get(`${BASE_URL}/api/fetch-membership-year`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setMembershipYear(res.data.membershipyear);
      });
  };
  const [schoolallotyear, setSchoolAllotYear] = useState([]);
  const FetchSchoolAllotYear = () => {
    axios
      .get(`${BASE_URL}/api/fetch-school-allot-year`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setSchoolAllotYear(res.data.schoolallotyear);
      });
  };
  const [recepitcontrol, setRecepitControl] = useState({});
  const FetchRecepitYear = () => {
    axios
      .get(`${BASE_URL}/api/fetch-receipt-control`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setRecepitControl(res.data.receipt_control);
      });
  };
  useEffect(() => {
    FetchSchoolAllotYear();
    FetchMemeberShipYear();
    FetchRecepitYear();
  }, []);
useEffect(() => {
    let timeoutId;
      timeoutId = setTimeout(() => {
        if (isPanelUp.error == "Maintenance") {
          localStorage.clear();
          navigate("/maintenance");
        }
      }, 5000); 



    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [ isPanelUp, navigate]);

  const pan = userdata.indicomp_pan_no == "" ? "NA" : userdata.indicomp_pan_no;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
   

    setIsButtonDisabled(true);
    const formData = new FormData();
    formData.append("indicomp_fts_id", userdata.indicomp_fts_id);
    // if (
    //   recepitcontrol.date_open === "No" &&
    //   recepitcontrol.date_open_one === "No"
    // ) {
    //   formData.append("receipt_date", "2025-03-31");
    // } else if (recepitcontrol.date_open === "Yes") {
    //   formData.append("receipt_date", donor.receipt_date);
    // } else if (recepitcontrol.date_open_one === "Yes") {
    //   formData.append("receipt_date", recepitcontrol.date_open_one_date);
    // }
    formData.append("receipt_date", "2025-03-31");
    formData.append("receipt_old_no", donor.receipt_old_no);
    formData.append("receipt_exemption_type", donor.receipt_exemption_type);
    formData.append("receipt_financial_year",donor.receipt_financial_year );
    formData.append("schoolalot_year", donor.schoolalot_year);
    formData.append("receipt_total_amount", donor.receipt_total_amount);
    formData.append("receipt_realization_date", donor.receipt_realization_date);
    formData.append("receipt_donation_type", donor.receipt_donation_type);
    formData.append("receipt_tran_pay_mode", donor.receipt_tran_pay_mode);
    formData.append("receipt_tran_pay_details", donor.receipt_tran_pay_details);
    formData.append("receipt_remarks", donor.receipt_remarks);
    formData.append("receipt_reason", donor.receipt_reason);
    formData.append("receipt_email_count", donor.receipt_email_count);
    formData.append("receipt_created_at", donor.receipt_created_at);
    formData.append("receipt_created_by", donor.receipt_created_by);
    formData.append("receipt_update_at", donor.receipt_update_at);
    formData.append("receipt_update_by", donor.receipt_update_by);
    formData.append("m_ship_vailidity", donor.m_ship_vailidity);
    formData.append("receipt_no_of_ots", donor.receipt_no_of_ots);
    formData.append("donor_promoter", userdata.indicomp_promoter);
    formData.append("donor_source", donor.donor_source);
    try {
      const res = await axios.post(`${DONOR_LIST_CREATE_RECEIPT}`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (res.data.code === 200) {
        toast.success(res.data.msg);
        navigate(`/donor-list`);
    
                                 
      } else if (res.data.code === 400) {
        toast.error(res.data.msg);
        setIsButtonDisabled(false);
      } else {
        toast.error("Unexcepted Error");
        setIsButtonDisabled(false);
      }
    } catch (error) {
      console.error("Error updating Receipt:", error);
      toast.error("Error  updating Receipt");
    } finally {
      setIsButtonDisabled(false);
    }
  };

  const renderButtonGroup = (options, stateName, currentValue) => (
    <ButtonGroup className="w-full h-9 flex flex-wrap  ">
      {options.map((option) => (
        <Button
          key={option.value}
          onClick={() => handleButtonGroupChange(stateName, option.value)}
          className={`flex-grow ${
            currentValue === option.value
              ? "bg-green-500 text-black"
              : "bg-[#E1F5FA] text-blue-gray-700 hover:bg-blue-100"
          } text-[10px] lg:text-xs py-2 lg:py-0 
          w-1/2 md:w-1/3 lg:w-auto rounded-none  mt-1 lg:mt-0   `}
        >
          {option.label}
        </Button>
      ))}
    </ButtonGroup>
  );

  const FormLabel = ({ children, required }) => (
    <label className="block text-sm font-semibold text-black mb-1 ">
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );

  const inputClassSelect =
    "w-full px-3 py-2 text-xs border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 border-green-500";
  const inputClass =
    "w-full px-3 py-2 text-xs border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500 border-green-500";
  return (
    <Layout>
      <div className="bg-[#F8FAFC] p-0 md:p-2   overflow-y-auto custom-scroll-add">
        <div className="sticky top-0 z-10 bg-white shadow-md rounded-xl mb-2">
          <div className="bg-[#E1F5FA] p-4 rounded-t-xl border-b-2 border-green-500">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <IconInfoCircle className="w-5 h-5 text-green-600" />
                <h2 className="text-sm font-semibold text-black">
                  Create Receipt 
                </h2>
              </div>
              <IconArrowBack
                onClick={() => {
                  navigate("/donor-list");
                }}
                // onClick={onClose}
                className="cursor-pointer hover:text-red-600 transition-colors"
              />
            </div>
          </div>

          <div className="p-4 bg-white rounded-b-xl">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-black">
                  {userdata.indicomp_full_name}
                </h3>
                <p className="text-xs font-semibold text-black">
                  FTS Id: {userdata.indicomp_fts_id}
                </p>
              </div>
              <div className="space-y-1 relative">
                <div className="flex items-center">
                  {recepitcontrol.date_open === "No" &&
                  recepitcontrol.date_open_one === "No" ? (
                    <h3 className="text-md font-semibold text-black">
31-03-2025
                    </h3>
                  ) : (
                    ""
                  )}
                  {recepitcontrol.date_open_one === "Yes" ? (
                    <h3 className="text-md font-semibold text-black">
                      {moment(recepitcontrol.date_open_one_date).format(
                        "DD-MM-YYYY"
                      )}
                      {/* {recepitcontrol.date_open_one} */}
                    </h3>
                  ) : (
                    ""
                  )}
                </div>

                <p className="   text-xs font-semibold text-black">
                  Year: 2024-25
                </p>
                <p className="text-xs font-semibold text-black">Pan : {pan}</p>
              </div>
              {donor.receipt_total_amount > 2000 &&
              donor.receipt_exemption_type == "80G" &&
              pan == "NA" ? (
                <span className="amounterror">
                  Max amount allowedwithout Pan card is 2000
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          id="addIndiv"
          className="w-full  bg-white rounded-lg mx-auto p-6 space-y-8 "
        >
          <div>
            {/* <h2 className=" px-5 text-[black] text-sm mb-2 flex flex-row gap-2 items-center  rounded-xl p-4 bg-[#E1F5FA]">
              <IconInfoCircle className="w-4 h-4" />
              <span>Receipt Details</span>
            </h2> */}
            <div className="grid grid-cols-1 p-4 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 md:gap-8">
              {/* {recepitcontrol.date_open === "Yes" ? (
                <div>
                  <FormLabel required>Receipt Date</FormLabel>
                  <input
                    type="date"
                    name="receipt_date"
                    value={donor.receipt_date}
                    onChange={(e) => onInputChange(e)}
                    className={inputClass}
                    required
                    min={moment(recepitcontrol.date_open_from).format(
                      "YYYY-MM-DD"
                    )}
                    max={moment(recepitcontrol.date_open_to).format(
                      "YYYY-MM-DD"
                    )}
                  />
                </div>
              ) : (
                ""
              )} */}

              <div className=" col-span-0 lg:col-span-2">
                {/* <FormLabel required>Category</FormLabel>
                <select
                  name="receipt_exemption_type"
                  value={donor.receipt_exemption_type}
                  onChange={(e) => onInputChange(e)}
                  required
                  className={inputClassSelect}
                >
                  <option value="">Select Category</option>
                  {exemption.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select> */}

                <FormLabel required>Category</FormLabel>
                {renderButtonGroup(
                  exemption,
                  "receipt_exemption_type",
                  donor.receipt_exemption_type
                )}
                {/* {!donor.receipt_exemption_type && (
                  <p className="text-red-500 text-xs mt-1">
                    Please select a category
                  </p>
                )} */}
              </div>

              {/* 
              <div>
                <FormLabel required>Transaction Type</FormLabel>
                
                {renderButtonGroup(
                  donor.receipt_exemption_type == "80G" &&
                    donor.receipt_total_amount > 2000
                    ? pay_mode_2
                    : pay_mode,
                  "receipt_tran_pay_mode",
                  donor.receipt_tran_pay_mode
                )}
                {!donor.receipt_tran_pay_mode && (
                  <p className="text-red-500 text-xs mt-1">
                    Please select a transaction type
                  </p>
                )}
               
              </div> */}

              <div className=" col-span-0 lg:col-span-2">
                <FormLabel required>Purpose</FormLabel>
                {/* <select
                  name="receipt_donation_type"
                  value={donor.receipt_donation_type}
                  onChange={(e) => onInputChange(e)}
                  required
                  className={inputClassSelect}
                >
                  <option value="">Select Transaction Type</option>
                  {donor.receipt_exemption_type == "80G"
                    ? donation_type_2.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))
                    : donation_type.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                </select> */}

                {renderButtonGroup(
                  donor.receipt_exemption_type == "80G"
                    ? donation_type_2
                    : donation_type,
                  "receipt_donation_type",
                  donor.receipt_donation_type
                )}
                {/* {!donor.receipt_donation_type && (
                  <p className="text-red-500 text-xs mt-1">
                    Please select a purpose
                  </p>
                )} */}
                {/* <p className="text-gray-600 text-xs px-2 pt-1">
                  Please select your Donation Type
                </p> */}
              </div>
              <div>
                <FormLabel required>Total Amount</FormLabel>
                <input
                  type="text"
                  maxLength={8}
                  name="receipt_total_amount"
                  value={donor.receipt_total_amount}
                  onChange={(e) => onInputChange(e)}
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <FormLabel>Realization Date</FormLabel>
                <input
                  type="date"
                  name="receipt_realization_date"
                  value={donor.receipt_realization_date}
                  onChange={(e) => onInputChange(e)}
                  className={inputClass}
                  max={new Date().toISOString().split("T")[0]}
                />
              </div>
              <div className=" col-span-0  md:col-span-2">
                <FormLabel required>Transaction Type</FormLabel>

                {renderButtonGroup(
                  donor.receipt_exemption_type == "80G" &&
                    donor.receipt_total_amount > 2000
                    ? pay_mode_2
                    : pay_mode,
                  "receipt_tran_pay_mode",
                  donor.receipt_tran_pay_mode
                )}
                {/* {!donor.receipt_tran_pay_mode && (
                  <p className="text-red-500 text-xs mt-1">
                    Please select a transaction type
                  </p>
                )} */}
              </div>

              {donor.receipt_donation_type == "Membership" ? (
                <div>
                  <FormLabel>
                    Membership End Date<span className="text-red-500">*</span>
                  </FormLabel>
                  <select
                    name="m_ship_vailidity"
                    value={donor.m_ship_vailidity}
                    onChange={(e) => onInputChange(e)}
                    className={inputClassSelect}
                    required
                  >
                    <option value="">Select Membership End Date</option>
                    {membershipyear.map((option) => (
                      <option key={option.value} value={option.membership_year}>
                        {option.membership_year}
                      </option>
                    ))}
                  </select>
                  <p className="text-gray-600 text-xs px-2 pt-1">
                    Membership End Date
                  </p>
                </div>
              ) : (
                ""
              )}
              {donor.receipt_donation_type == "General" ? (
                <div>
                  <FormLabel>Source</FormLabel>
                  <select
                    name="donor_source"
                    value={donor.donor_source}
                    onChange={(e) => onInputChange(e)}
                    className={inputClassSelect}
                  >
                    <option value="">Select Source</option>
                    {datasource.map((source) => (
                      <option key={source.id} value={source.data_source_type}>
                        {source.data_source_type}
                      </option>
                    ))}
                  </select>
                  <p className="text-gray-600 text-xs px-2 pt-1">Source</p>
                </div>
              ) : (
                ""
              )}
              {donor.receipt_donation_type == "One Teacher School" ? (
                <div>
                  <FormLabel>
                    No of Schools<span className="text-red-500">*</span>
                  </FormLabel>
                  <input
                    type="text"
                    maxLength={3}
                    name="receipt_no_of_ots"
                    value={donor.receipt_no_of_ots}
                    onChange={(e) => onInputChange(e)}
                    className={inputClass}
                    required
                  />
                </div>
              ) : (
                ""
              )}
              {donor.receipt_donation_type == "One Teacher School" ? (
                <div>
                  <FormLabel>
                    School Allottment Year{" "}
                    <span className="text-red-500">*</span>
                  </FormLabel>
                  <select
                    name="schoolalot_year"
                    value={donor.schoolalot_year}
                    onChange={(e) => onInputChange(e)}
                    className={inputClassSelect}
                    required
                  >
                    <option value="">Select Allotment year</option>
                    {schoolallotyear.map((source) => (
                      <option
                        key={source.value}
                        value={source.school_allot_year}
                      >
                        {source.school_allot_year}
                      </option>
                    ))}
                  </select>
                  <p className="text-gray-600 text-xs px-2 pt-1">
                    School Allottment Year
                  </p>
                </div>
              ) : (
                ""
              )}

              <div>
                <FormLabel>Transaction Pay Details</FormLabel>
                <textarea
                  type="text"
                  name="receipt_tran_pay_details"
                  value={donor.receipt_tran_pay_details}
                  onChange={(e) => onInputChange(e)}
                  className={inputClass}
                />
                <p className="text-gray-600 text-xs px-2 pt-1">
                  Cheque No / Bank Name / UTR / Any Other Details
                </p>
              </div>

              <div>
                <FormLabel>Remarks</FormLabel>
                <textarea
                  type="text"
                  name="receipt_remarks"
                  value={donor.receipt_remarks}
                  onChange={(e) => onInputChange(e)}
                  className={inputClass}
                />
              </div>

              {/* <div className=" col-span-0  lg:col-span-2">
                <FormLabel required>Transaction Type</FormLabel>
                
                {renderButtonGroup(
                  donor.receipt_exemption_type == "80G" &&
                    donor.receipt_total_amount > 2000
                    ? pay_mode_2
                    : pay_mode,
                  "receipt_tran_pay_mode",
                  donor.receipt_tran_pay_mode
                )}
                {!donor.receipt_tran_pay_mode && (
                  <p className="text-red-500 text-xs mt-1">
                    Please select a transaction type
                  </p>
                )}
               
              </div> */}
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex gap-4 justify-start">
            <button
              type="submit"
              className="text-center text-sm font-[400] cursor-pointer hover:animate-pulse w-36 text-white bg-blue-600 hover:bg-green-700 p-2 rounded-lg shadow-md"
              disabled={
                isButtonDisabled ||
                !donor.receipt_exemption_type ||
                !donor.receipt_tran_pay_mode ||
                !donor.receipt_donation_type
              }
            >
              {isButtonDisabled ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default CreateReceipt;
