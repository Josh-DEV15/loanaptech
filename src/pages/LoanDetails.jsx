import React , { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./LoanDetails.css";

function LoanDetails() {
    const { id } = useParams();
    const [loan, setLoan] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchLoan();
    }, []);

    const fetchLoan = async () => {
        try {
            const response = await fetch(`https://loanaptech.onrender.com/api/loans/${id}`, {
                credentials: 'include',
            });
            const data = await response.json();
            if (!response.ok) {
                setError(data.error || 'Failed to fetch loan details');
                return;