import React, { useEffect, useMemo, useState } from "react";
import Layout from "../../../layout/Layout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IconReceipt } from "@tabler/icons-react";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { DONOR_LIST, navigateToCreateReceipt } from "../../../api";
import Logout from "../../../components/Logout";

const DonorList = () => {
  const [donorData, setDonorData] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const userType = localStorage.getItem("user_type_id");
  const [columnVisibility, setColumnVisibility] = useState({
    indicomp_spouse_name: false,
    indicomp_com_contact_name: false,
    indicomp_fts_id: false,
  });
  const [logoutOpen, setLogoutOpen] = useState(false);

  const fetchDonorData = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const response = await axios.get(`${DONOR_LIST}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setDonorData(response.data?.individualCompanies);
    } catch (error) {
      console.error("Error fetching Factory data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDonorData();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "indicomp_fts_id",
        header: "Fts Id",
        isVisible: columnVisibility.indicomp_fts_id,
        enableHiding: false,
      },
      {
        accessorKey: "indicomp_full_name",
        header: "Full Name",
        size: 150,
      },
      {
        accessorKey: "indicomp_type",
        header: "Type",
        size: 50,
      },
      {
        accessorKey: "indicomp_spouse_name",
        header: "Spouse",
        isVisible: columnVisibility.indicomp_spouse_name,
        enableHiding: false,
      },
      {
        accessorKey: "indicomp_com_contact_name",
        header: "Contact",
        isVisible: columnVisibility.indicomp_com_contact_name,
        enableHiding: false,
      },
      {
        accessorKey: "spouse_contact",
        header: "Spouse/Contact",
        size: 150,
        Cell: ({ value, row }) => {
          const indicompType = row.original.indicomp_type;
          const spouseRow = row.original?.indicomp_spouse_name;
          const contactRow = row.original?.indicomp_com_contact_name;
          if (indicompType === "Individual") {
            return spouseRow;
          } else {
            return contactRow;
          }
        },
      },
      {
        accessorKey: "indicomp_mobile_phone",
        header: "Mobile",
        size: 50,
      },

      {
        accessorKey: "indicomp_email",
        header: "Email",
        size: 150,
        Cell: ({ value, row }) => {
          const valueData = row.original?.indicomp_email;

          return <div>{valueData}</div>;
        },
      },
      ...(userType === "4"
        ? [
            {
              accessorKey: "chapter_name",
              header: "Chapter",
              size: 50,
            },
          ]
        : []),
      {
        id: "id",
        header: "Action",
        size: 20,
        enableHiding: false,
        Cell: ({ row }) => {
          const id = row.original.id;

          return (
            <div className="flex gap-2">
              {userType == "1" ? (
                <div
                  onClick={() => {
                    navigateToCreateReceipt(navigate, id);
                  }}
                  className="flex items-center space-x-2"
                  title="Create Reciept"
                >
                  <IconReceipt className="h-5 w-5 text-blue-500 cursor-pointer" />
                </div>
              ) : (
                ""
              )}
            </div>
          );
        },
      },
    ],
    []
  );

  const table = useMantineReactTable({
    columns,
    data: donorData || [],
    enableFullScreenToggle: false,
    enableDensityToggle: false,
    enableColumnActions: false,
    enableHiding: false,
    state: { columnVisibility },
    enableStickyHeader: true,
    enableStickyFooter: true,
    mantineTableContainerProps: { sx: { maxHeight: "400px" } },
    onColumnVisibilityChange: setColumnVisibility,
    initialState: { columnVisibility: { address: false } },
  });

  return (
    <>
      <Layout>
      <div className="max-w-screen mx-auto p-0 md:p-2">
      <div className="sticky top-0 z-10 bg-white shadow-md rounded-xl mb-4">
            <div className="bg-[#E1F5FA] p-4 rounded-t-xl border-b-2 border-green-500">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-green-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <h2 className="text-lg font-semibold text-gray-800">Donor List</h2>
                </div>
                <button
                  onClick={() => setLogoutOpen(true)}
                  className="flex items-center gap-1 text-red-500 hover:text-red-700 transition-colors"
                  title="Logout"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium">Logout</span>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <MantineReactTable table={table}  />
          </div>
          <Logout
          open={logoutOpen}
          handleOpen={() => setLogoutOpen(!logoutOpen)}
        />
        </div>
      
      </Layout>
    </>
  );
};

export default DonorList;
