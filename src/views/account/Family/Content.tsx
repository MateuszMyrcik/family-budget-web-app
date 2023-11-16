import {
  useUserAction,
  useUserHousehold,
  useUserHouseholdOwnerId,
  useUserIsOwner,
} from "@/entities/user";
import { UserRole, USER_ROLE } from "@/shared";

import {
  CancelOutlined,
  CheckCircleOutline,
  DeleteOutline,
} from "@mui/icons-material";

import {
  Box,
  Button,
  CardHeader,
  Divider,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

export const FamilyContent = () => {
  const household = useUserHousehold();
  const householdOwnerId = useUserHouseholdOwnerId();
  const { acceptInvite, declineInvite, removeMember, removeHousehold } =
    useUserAction();
  const hasPendingInvites = household?.pendingInvites.length ?? 0 > 0;
  const isUserOwner = useUserIsOwner();

  const renderWithFallback = (value: string | undefined) => value ?? <>-</>;

  return (
    <Box display="flex" gap={2} flexDirection="column">
      <Paper elevation={0}>
        <CardHeader
          title={
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography>Twoja grupa domowa</Typography>
              {isUserOwner && (
                <Button variant="text" onClick={removeHousehold}>
                  Usuń grupę
                </Button>
              )}
            </Box>
          }
        />
        <Divider />
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableCell>Email</TableCell>
              <TableCell>Rola</TableCell>
              <TableCell>Imię</TableCell>
              <TableCell>Nazwisko</TableCell>
              {isUserOwner && <TableCell sx={{ width: 10 }}>Usuń</TableCell>}
            </TableHead>
            <TableBody>
              {household?.members.map(({ _id, email, name, surname, role }) => {
                const isOwner = householdOwnerId === _id;
                const enabledDeleteAction = !isOwner;
                const roleName = isOwner ? "Właściciel" : "Członek";
                return (
                  <TableRow key={_id}>
                    <TableCell
                      sx={{
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        maxWidth: "200px",
                      }}
                    >
                      {email}
                    </TableCell>
                    <TableCell>{roleName}</TableCell>
                    <TableCell>{renderWithFallback(name)}</TableCell>
                    <TableCell>{renderWithFallback(surname)}</TableCell>
                    {isUserOwner && (
                      <TableCell>
                        <Button
                          aria-label="delete"
                          size="large"
                          onClick={() => removeMember(_id)}
                          disabled={!enabledDeleteAction}
                        >
                          <DeleteOutline
                            color={enabledDeleteAction ? "primary" : "disabled"}
                          />
                        </Button>
                      </TableCell>
                    )}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      {isUserOwner && (
        <Paper elevation={0}>
          <CardHeader title="Zaproszenia" />
          <Divider />
          <TableContainer>
            <Table>
              <TableHead>
                <TableCell>Email</TableCell>
                <TableCell>Akceptuj</TableCell>
                <TableCell>Odrzuć</TableCell>
              </TableHead>
              <TableBody>
                {hasPendingInvites ? (
                  household?.pendingInvites.map(({ sender, _id }) => (
                    <TableRow key={sender._id}>
                      <TableCell>{sender.email}</TableCell>
                      <TableCell>
                        <IconButton
                          size="large"
                          onClick={() => acceptInvite(_id)}
                        >
                          <CheckCircleOutline color="success" />
                        </IconButton>
                      </TableCell>
                      <TableCell>
                        <IconButton
                          size="large"
                          onClick={() => declineInvite(_id)}
                        >
                          <CancelOutlined color="error" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell>Brak zaproszeń</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </Box>
  );
};
