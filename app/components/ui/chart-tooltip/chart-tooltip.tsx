'use client';

// Third-Party
import { TooltipProps } from 'recharts';
import { NameType, Payload, ValueType } from 'recharts/types/component/DefaultTooltipContent';

// Styles
import styles from './chart-tooltip.module.scss';

// Utils
import { FormatPopulation } from '@app/utils/parsing';

export default function ChartTooltip({payload, label, active}: TooltipProps<ValueType, NameType>) {
  if (active) {
    return (
      <div className={styles.tooltip}>
        <div className={styles.year}>
          <span>{label}年</span>
        </div>
        <div className={styles.rows}>
          {payload && payload.map((p: Payload<ValueType, NameType>, i: number) => {
            return (
              <div className={styles.row} style={{color: p.stroke}} key={i}>
                <div className={styles.label}>{p.name}:</div>
                <div className={styles.value}>{p.value ? FormatPopulation(parseInt(p.value.toString())) : ''}</div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
