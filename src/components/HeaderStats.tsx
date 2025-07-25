import React from 'react';
import { DollarSign, TrendingUp, TrendingDown, Clock } from 'lucide-react';
import { TransactionSummary } from '../types/transaction';
import Grid2 from '@mui/material/Unstable_Grid2';
import Skeleton from '@mui/material/Skeleton';

interface HeaderStatsProps {
  summary: TransactionSummary | null;
  filteredCount: number;
  totalCount: number;
  isAnalyzing: boolean;
  highRiskTransactions?: number;
}

export const HeaderStats: React.FC<HeaderStatsProps> = ({
  summary,
  filteredCount,
  totalCount,
  isAnalyzing,
  highRiskTransactions = 0,
}) => {
  return (
    <Grid2 container spacing={2} className="dashboard-stats">
      <Grid2 xs={12}>
        <div className="stat-card">
          <div className="stat-icon">
            <DollarSign size={24} />
          </div>
          <div className="stat-content">
            <div className="stat-value" aria-live="polite">
              {summary ? (
                `$${summary.totalAmount.toLocaleString()}`
              ) : (
                <Skeleton variant="text" width={120} />
              )}
            </div>
            <div className="stat-label">Total Amount</div>
          </div>
        </div>
      </Grid2>

      <Grid2 xs={12}>
        <div className="stat-card">
          <div className="stat-icon">
            <TrendingUp size={24} />
          </div>
          <div className="stat-content">
            <div className="stat-value" aria-live="polite">
              {summary ? (
                `$${summary.totalCredits.toLocaleString()}`
              ) : (
                <Skeleton variant="text" width={120} />
              )}
            </div>
            <div className="stat-label">Total Credits</div>
          </div>
        </div>
      </Grid2>

      <Grid2 xs={12}>
        <div className="stat-card">
          <div className="stat-icon">
            <TrendingDown size={24} />
          </div>
          <div className="stat-content">
            <div className="stat-value" aria-live="polite">
              {summary ? (
                `$${summary.totalDebits.toLocaleString()}`
              ) : (
                <Skeleton variant="text" width={120} />
              )}
            </div>
            <div className="stat-label">Total Debits</div>
          </div>
        </div>
      </Grid2>

      <Grid2 xs={12}>
        <div className="stat-card">
          <div className="stat-icon">
            <Clock size={24} />
          </div>
          <div className="stat-content">
            <div className="stat-value" aria-live="polite">
              {filteredCount.toLocaleString()}
              {filteredCount !== totalCount && (
                <span className="stat-total"> of {totalCount.toLocaleString()}</span>
              )}
            </div>
            <div className="stat-label">
              Transactions
              {isAnalyzing && <span> (Analyzing...)</span>}
              {highRiskTransactions > 0 && <span> - Risk: {highRiskTransactions}</span>}
            </div>
          </div>
        </div>
      </Grid2>
    </Grid2>
  );
};
