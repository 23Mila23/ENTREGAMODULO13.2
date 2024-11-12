import { AppLayout } from "@/layaouts";
import React from "react";
import {MovementVm} from "./movement-list.vm"

const movementsMock = [
  {
    "id": "4",
    "description": "Luz diciembre",
    "amount": -110,
    "balance": 2480,
    "transaction": new Date("2020-01-02T10:00:00"),
    "realTransaction": new Date("2020-01-03T10:00:00"),
    "accountId": "2"
  },
  {
    "id": "5",
    "description": "Agua diciembre",
    "amount": -20,
    "balance": 2590,
    "transaction": new Date("2020-01-01T09:00:00"),
    "realTransaction": new Date("2020-01-01T09:00:00"),
    "accountId": "2"
  },
  {
    "id": "6",
    "description": "Internet diciembre",
    "amount": -35,
    "balance": 2610,
    "transaction": new Date("2020-01-01T08:00:00"),
    "realTransaction": new Date("2020-01-01T08:00:00"),
    "accountId": "2"
  },
  {
    "id": "7",
    "description": "Luz noviembre",
    "amount": -89,
    "balance": 2645,
    "transaction": new Date("2019-12-01T07:01:00"),
    "realTransaction": new Date ("2019-12-02T12:00:10"),
    "accountId": "2"
  }
]

export const MovementListPage: React.FC = () => {
  const {movementList} = React.useState<MovementVm[]>(movementsMock);

  return (
    <AppLayout>

      <div> Movemement List</div>

    </AppLayout>
  );
};

