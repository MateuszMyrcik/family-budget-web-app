import { useTransactionAction } from "@/entities/transaction";
import { useLang } from "@/hooks/useLang";
import { Transaction } from "@/shared";
import {
  Delete,
  DeleteOutlineOutlined,
  Edit,
  EditOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";
import {
  Grid,
  IconButton,
  Menu,
  MenuItem,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { formatDate } from "../lib";

type Props = {
  transaction: Transaction;
};

export const TransactionItem = ({
  transaction: {
    id,
    name,
    amount,
    transactionDate,
    classificationRecord,
    type,
  },
}: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { push } = useRouter();
  const { removeTransaction } = useTransactionAction();
  const { currentLang } = useLang();
  const isMenuOpen = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classificationGroupLabel =
    classificationRecord.group.label.find((label) => label.lang === currentLang)
      ?.value ?? "";

  const date = new Date(transactionDate);

  return (
    <Grid
      container
      spacing={1}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid",
        borderColor: "grey.300",
        borderRadius: "10px",
        padding: "10px",
        // "&:hover": {
        //   backgroundColor: "gray.100",
        //   cursor: "pointer",
        // },
      }}
      // className="grid grid-cols-[40px_300px_100px_100px_50px] items-center p-2 border-[1px] rounded-lg gap-2 hover:bg-gray-100 cursor-pointer justify-between"
    >
      <Grid item xs={1}>
        {formatDate(date)}
      </Grid>
      <Grid item xs={5}>
        {name}
      </Grid>
      <Grid
        item
        xs={2}
        // className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700"
      >
        {classificationGroupLabel}
      </Grid>
      <Grid
        item
        xs={3}
        sx={{
          color: type === "INCOME" ? "success.main" : "error.main",
        }}
        // className={clsx(
        //   "text-base",
        //   type === "INCOME"
        //     ? "text-success-main"
        //     : "text-error-main"
        // )}
      >
        {amount.value}
      </Grid>

      <Grid item xs={1} sx={{ overflow: "hidden" }}>
        <IconButton onClick={handleOpen}>
          <MoreHorizOutlined></MoreHorizOutlined>
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={isMenuOpen}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              removeTransaction(id);
              handleClose();
            }}
          >
            <Delete fontSize="small" />
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              push(`/transaction/${id}`);
            }}
          >
            <Edit fontSize="small" />
          </MenuItem>
        </Menu>
      </Grid>

      {/* <Grid item xs={1}>
                          <Link href={`/transaction/${id}`}>
                            <IconButton aria-label="edit">
                              <Edit />
                            </IconButton>
                          </Link>
                        </Grid>

                        <Grid item xs={1}>
                          <IconButton
                            aria-label="delete"
                            onClick={() => {
                              removeTransaction(id);
                            }}
                          >
                            <Delete />
                          </IconButton>
                        </Grid> */}
    </Grid>
  );
};

export const TransactionTableRow = ({
  transaction: {
    id,
    name,
    amount,
    transactionDate,
    classificationRecord,
    type,
  },
}: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { t } = useTranslation("common");

  const { push } = useRouter();
  const { removeTransaction } = useTransactionAction();
  const { currentLang } = useLang();
  const isMenuOpen = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classificationGroupLabel =
    classificationRecord.group.label.find((label) => label.lang === currentLang)
      ?.value ?? "";

  const date = new Date(transactionDate);

  return (
    <TableRow>
      <TableCell>{formatDate(date)}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{classificationGroupLabel}</TableCell>
      <TableCell
        sx={{
          color: type === "INCOME" ? "success.main" : "error.main",
        }}
      >
        {amount.value}
      </TableCell>
      <TableCell>
        <IconButton onClick={handleOpen}>
          <MoreHorizOutlined />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={isMenuOpen}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              removeTransaction(id);
              handleClose();
            }}
            sx={{
              color: "error.main",
              display: "flex",
              alignItems: "center",
              justifyItems: "center",
              gap: 1,
            }}
          >
            <DeleteOutlineOutlined fontSize="small" />
            <Typography variant="body2" color="error.main">
              {t("finance.deleteTransaction")}
            </Typography>
          </MenuItem>
          <MenuItem
            onClick={() => {
              push(`/transaction/${id}`);
              handleClose();
            }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyItems: "center",
              gap: 1,
            }}
          >
            <EditOutlined fontSize="small" />
            <Typography variant="body2">
              {t("finance.editTransaction")}
            </Typography>
          </MenuItem>
        </Menu>
      </TableCell>
    </TableRow>
  );
};

//  <Paper>
//    <TableContainer>
//      <Table>
//        <TableHead>
//          <TableRow>
//            <TableCell>{t("finance.transactionDate")}</TableCell>
//            <TableCell>{t("finance.transactionName")}</TableCell>
//            <TableCell>{t("finance.transactionClassification")}</TableCell>
//            <TableCell>{t("finance.transactionAmount")}</TableCell>
//            <TableCell>{t("finance.transactionAction")}</TableCell>
//          </TableRow>
//        </TableHead>

//        <TableBody>
//          {transactions.map((transaction) => (
//            <TransactionTableRow
//              key={transaction.id}
//              transaction={transaction}
//            />
//          ))}
//        </TableBody>
//      </Table>
//    </TableContainer>
//  </Paper>;
